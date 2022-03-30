// import { Euler } from "../../../modules/math/Euler.js";
// import { Quaternion } from "../../../modules/math/Quaternion.js";
import type Three from 'tinyjs-plugin-three';

type Option = {
  model: string;
};

export class MainLayer extends Tiny.Container {
  option: Option;
  model!: Three.Model;
  constructor(option: Option) {
    super();
    this.option = option;
    this.init();
  }

  async init() {
    try {
      const resources: any = await this.loadResource();
      const sceneGltf = resources.scene.gltf;
      const modelGltf = resources.model.gltf;
      this.setEnvironmentLight(sceneGltf);
      this.setLights(modelGltf);
      this.model = Tiny.three.Model.from(modelGltf);
      this.addChild(this.model);
    } catch (ex) {
      alert('模型渲染失败，请检查你输入的 gltf 链接');
    }
  }

  _destroy() {
    this?.model?.meshes.forEach((mesh: any) => mesh.destroy());
  }
  loadResource() {
    const { model } = this.option;
    const loader = new Tiny.loaders.Loader();
    loader.add({
      name: "model",
      url: model,
      // metadata: {
      //   mimeType: 'model/gltf+json',
      // },
      // xhrType: Tiny?.loaders?.Resource?.XHR_RESPONSE_TYPE?.JSON,
    });

    loader.add({
      name: 'scene',
      url: 'https://gw.alipayobjects.com/os/H5App-BJ/1632466215699-gltf/scene.gltf'
    });


    return new Promise((resolve, reject) => {
      loader.load((_loader: any, resources: any) => {
        resolve(resources);
      }).on('error', (ex) => {
        reject(ex);
      });
    });
  }
  setIBL(data: Three.glTFAsset) {
    if (
      data.descriptor.extensions
      && data.descriptor.extensions.EXT_lights_image_based
      && data.descriptor.extensions.EXT_lights_image_based.lights) {
      const skyData = data.descriptor.extensions.EXT_lights_image_based.lights[0];
      const imageData = data.images;
      const irradianceCoefficients = [];
      for (let i = 0; i < skyData.irradianceCoefficients.length; i += 3) {
        const v1 = skyData.irradianceCoefficients[i];
        const v2 = skyData.irradianceCoefficients[i + 1];
        const v3 = skyData.irradianceCoefficients[i + 2];
        irradianceCoefficients.push([v1, v2, v3]);
      }

      const diffuseCubeMaps = [];
      const specularCubeMaps = [];
      const faceFlags = ['POSITIVE_X', 'NEGATIVE_X', 'POSITIVE_Y', 'NEGATIVE_Y', 'NEGATIVE_Z', 'POSITIVE_Z'];
      for (let i = 0; i < faceFlags.length; i++) {
        const textureField = `TEXTURE_CUBE_MAP_${faceFlags[i]}`;
        const diffuseImages = [];
        const specularImages = [];
        for (let j = 0; j < skyData.specularImages.length; j++) {
          const image = imageData[skyData.specularImages[j][i]];
          if (j === skyData.specularImages.length - 1) { diffuseImages.push(image); }
          specularImages.push(image);
        }
        // @ts-ignore
        diffuseCubeMaps.push(new Tiny.three.MipmapResource(diffuseImages, Tiny.three.TARGETS[textureField]));
        // @ts-ignore
        specularCubeMaps.push(new Tiny.three.MipmapResource(specularImages, Tiny.three.TARGETS[textureField]));
      }

      const specularCubeMipmapResource = new Tiny.three.CubeMipmapResource(specularCubeMaps, skyData.specularImages.length);
      const specularCubeMipmapTexture = new Tiny.three.CubeMipmapTexture(specularCubeMipmapResource);

      const imageBasedLighting = new Tiny.three.ImageBasedLighting({
        // diffuse: diffuseCubeMipmapTexture,
        specular: specularCubeMipmapTexture,
        // @ts-ignore
        irradianceCoefficients,
        intensity: 3, // skyData.intensity
      });

      Tiny.three.LightingEnvironment.main.imageBasedLighting = imageBasedLighting;

      // this.addChild(new Tiny3d.Skybox(specularCubeMipmapTexture));
    }
  }

  setEnvironmentLight(data: Three.glTFAsset) {
    if (data?.descriptor?.extensions?.EXT_lights_image_based.lights) {
      const skyData = data.descriptor.extensions.EXT_lights_image_based.lights[0];
      const imageData = data.images;
      const diffuseCubeMaps: Three.MipmapResource[] = [];
      const specularCubeMaps: Three.MipmapResource[] = [];
      const faceFlags = [
        'POSITIVE_X',
        'NEGATIVE_X',
        'POSITIVE_Y',
        'NEGATIVE_Y',
        'NEGATIVE_Z',
        'POSITIVE_Z',
      ];
      for (let i = 0; i < faceFlags.length; i++) {
        const textureField = `TEXTURE_CUBE_MAP_${faceFlags[i]}`;
        const diffuseImages: any[] = [];
        const specularImages: any[] = [];
        for (let j = 0; j < skyData.specularImages.length; j++) {
          const image = imageData[skyData.specularImages[j][i]];
          if (j === skyData.specularImages.length - 1) {
            diffuseImages.push(image);
          }
          specularImages.push(image);
        }
        diffuseCubeMaps.push(
          // @ts-ignore
          new Tiny.three.MipmapResource(diffuseImages, Tiny.three.TARGETS[textureField]),
        );
        specularCubeMaps.push(
          // @ts-ignore
          new Tiny.three.MipmapResource(specularImages, Tiny.three.TARGETS[textureField]),
        );
      }

      const diffuseCubeMipmapResource = new Tiny.three.CubeMipmapResource(diffuseCubeMaps, 1);
      const diffuseCubeMipmapTexture = new Tiny.three.CubeMipmapTexture(diffuseCubeMipmapResource);

      const specularCubeMipmapResource = new Tiny.three.CubeMipmapResource(
        specularCubeMaps,
        skyData.specularImages.length,
      );

      const specularCubeMipmapTexture = new Tiny.three.CubeMipmapTexture(
        // @ts-ignore
        specularCubeMipmapResource,
      );
      const imageBasedLighting = new Tiny.three.ImageBasedLighting({
        specular: specularCubeMipmapTexture,
        diffuse: diffuseCubeMipmapTexture,
        intensity: 1.8
      });

      Tiny.three.LightingEnvironment.main.imageBasedLighting = imageBasedLighting;
    }
  }

  setLights = (data: Three.glTFAsset) => {
    const LightParserConstruct = Tiny.three.glTFLightParser;
    const lightParser = new LightParserConstruct(data);
    const lightConfigs = lightParser.getLightCfg();
    Tiny.three.LightingEnvironment.main.lights = [];
    lightConfigs.forEach((cfg) => {
      const light = Object.assign(new Tiny.three.Light(), cfg);
      Tiny.three.LightingEnvironment.main.lights.push(light);
    });

    Tiny.three.LightingEnvironment.main.lights.push(
      Object.assign(new Tiny.three.Light(), {
        color: [1, 1, 1],
        intensity: 0.1,
        type: Tiny.three.LightType.ambient,
      }),
    );
  };
}

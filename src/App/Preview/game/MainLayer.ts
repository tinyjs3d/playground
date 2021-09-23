import { Euler } from "../../../modules/math/Euler.js";
import { Quaternion } from "../../../modules/math/Quaternion.js";

type Option = {
  model: string;
  scene?: string;
};

export class MainLayer extends Tiny.Container {
  option: Option;
  constructor(option: Option) {
    super();
    this.option = option;
    this.init();
  }

  async init() {
    const resources: any = await this.loadResource();
    const scene = this.option.scene ? resources.scene.gltf : resources.model.gltf;
    this.setSky(scene);
    this.setCamera(scene.descriptor);
    this.setLights(scene);
    const model = Tiny.three.Model.from(resources.model.gltf);
    this.addChild(model);
  }

  loadResource() {
    const { model, scene } = this.option;
    const loader = new Tiny.loaders.Loader();
    loader.add({
      name: "model",
      url: `./model/${model}/${model}.gltf`,
    });
    if (scene) {
      loader.add({
        name: 'scene',
        url: `./model/${scene}/${scene}.gltf`,
      });
    }

    return new Promise((resolve) => {
      loader.load((_loader: any, resources: any) => {
        resolve(resources);
      });
    });
  }

  setSky(data: any) {
    if (
      data._descriptor.extensions &&
      data._descriptor.extensions.EXT_lights_image_based &&
      data._descriptor.extensions.EXT_lights_image_based.lights
    ) {
      const skyData =
        data._descriptor.extensions.EXT_lights_image_based.lights[0];
      const imageData = data._images;
      const diffuseCubeMaps = [];
      const specularCubeMaps = [];
      const faceFlags = [
        "POSITIVE_X",
        "NEGATIVE_X",
        "POSITIVE_Y",
        "NEGATIVE_Y",
        "NEGATIVE_Z",
        "POSITIVE_Z",
      ];
      for (let i = 0; i < faceFlags.length; i++) {
        const textureField = `TEXTURE_CUBE_MAP_${faceFlags[i]}`;
        const diffuseImages = [];
        const specularImages = [];
        for (let j = 0; j < skyData.specularImages.length; j++) {
          const image = imageData[skyData.specularImages[j][i]];
          if (j === skyData.specularImages.length - 1) {
            diffuseImages.push(image);
          }
          specularImages.push(image);
        }
        diffuseCubeMaps.push(
          new Tiny.three.MipmapResource(
            diffuseImages,
            // @ts-ignore
            Tiny.three.TARGETS[textureField]
          )
        );
        // @ts-ignore
        specularCubeMaps.push(
          new Tiny.three.MipmapResource(
            specularImages,
            // @ts-ignore
            Tiny.three.TARGETS[textureField]
          )
        );
      }

      const diffuseCubeMipmapResource = new Tiny.three.CubeMipmapResource(
        diffuseCubeMaps,
        1
      );
      const diffuseCubeMipmapTexture = new Tiny.three.CubeMipmapTexture(
        diffuseCubeMipmapResource
      );

      const specularCubeMipmapResource = new Tiny.three.CubeMipmapResource(
        specularCubeMaps,
        skyData.specularImages.length
      );
      const specularCubeMipmapTexture = new Tiny.three.CubeMipmapTexture(
        specularCubeMipmapResource
      );
      const imageBasedLighting = new Tiny.three.ImageBasedLighting(
        diffuseCubeMipmapTexture,
        specularCubeMipmapTexture
      );
      // @ts-ignore
      Tiny.three.LightingEnvironment.main.imageBasedLighting = imageBasedLighting;

      this.addChild(new Tiny.three.Skybox(specularCubeMipmapTexture));
    }
  }

  setCamera(data: any) {
    const camera = Tiny.three.Camera.main;

    const cameraNode = data.nodes.find((n: any) => n.camera !== undefined);
    if (cameraNode) {
      // unity 中的 position.z 跟 gltf 中的相反，但是可以直接用
      if (cameraNode.translation) {
        camera.position.set(...cameraNode.translation);
      }

      if (cameraNode.rotation) {
        const quat = new Quaternion(...cameraNode.rotation);
        const euler = new Euler();
        // 只能使用这种顺序
        const angle = euler.setFromQuaternion(quat, "YXZ");
        camera.rotationQuaternion.setEulerAngles(
          (-angle.x * 180) / Math.PI,
          180 + (angle.y * 180) / Math.PI,
          (angle.z * 180) / Math.PI
        );
      }

      const cameraData = data.cameras[cameraNode.camera];
      camera.near = cameraData.perspective.znear;
      camera.far = cameraData.perspective.zfar;
    }
  }

  setLights(data: any) {
    const lightParser = new Tiny.three.glTFLightParser(data);
    const lightConfigs = lightParser.getLightCfg();
    lightConfigs.forEach((cfg, index) => {
      const light = Object.assign(new Tiny.three.Light(), cfg);
      Tiny.three.LightingEnvironment.main.lights.push(light);
    });
  }
}

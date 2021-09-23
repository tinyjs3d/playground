import React, { useEffect, useState, useCallback } from "react";
import "./index.css";

import { Button, message, Table,} from "antd";
import { MainLayer } from "./game/MainLayer";

import { DeviceFrameset } from "react-device-frameset";
import { DeviceEmulator } from "react-device-frameset/lib/DeviceEmulator";
import "react-device-frameset/lib/css/marvel-devices.min.css";
import "react-device-frameset/lib/css/device-emulator.min.css";

const baseUrl = "http://localhost:4000";

type UploadItem = {
  name: string;
  url: string;
  key: number;
  uploadTime: string;
};

export function Preview() {
  // const [app, setApp] = useState<Tiny.Application | null>(null);
  // const [selectModel, setSelectModel] = useState('');
  // const [uploadRecords, setUploadRecords] = useState<UploadItem[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [list, setList] = useState([]);

  // const getUploadRecords =  useCallback(() => {
  //   try {
  //     const recordsStr = localStorage.getItem('gltfUploadRecords') || '';
  //     setUploadRecords(JSON.parse(recordsStr));
  //   } catch(ex) {}
  // }, []);

  // const addUploadRecord = useCallback((name: string, url: string) => {
  //   const newUploadRecords = [...uploadRecords];
  //   newUploadRecords.push({
  //     name,
  //     url,
  //     key: newUploadRecords.length ? (newUploadRecords[newUploadRecords.length-1].key + 1) : 0,
  //     uploadTime: new Date().toLocaleString()
  //   });
  //   setUploadRecords(newUploadRecords);
  //   localStorage.setItem('gltfUploadRecords', JSON.stringify(newUploadRecords));
  // }, [uploadRecords]);

  // const deleteUploadRecord = useCallback((record: UploadItem) => {
  //   const newUploadRecords = [...uploadRecords];
  //   const index = newUploadRecords.findIndex(item => item.key === record.key);
  //   if (index !== -1) {
  //     newUploadRecords.splice(index, 1);
  //     setUploadRecords(newUploadRecords);
  //   }
  //   localStorage.setItem('gltfUploadRecords', JSON.stringify(newUploadRecords));
  // }, [uploadRecords]);

  // const exportJSON = useCallback(() => {
  //   const fileName = prompt('请为JSON文件命名', '');
  //   const eleLink = document.createElement('a');
  //   // @ts-ignore
  //   eleLink.download = `${fileName}.json`;
  //   eleLink.style.display = 'none';
  //   // 字符内容转变成blob地址
  //   var blob = new Blob([JSON.stringify(uploadRecords.map(i => {
  //     return {
  //       name: i.name,
  //       url: i.url
  //     };
  //   }))]);
  //   eleLink.href = URL.createObjectURL(blob);
  //   // 触发点击
  //   document.body.appendChild(eleLink);
  //   eleLink.click();
  //   // 然后移除
  //   document.body.removeChild(eleLink);
  // }, [uploadRecords]);

  // const editName = useCallback((record: UploadItem) => {
  //   const name = prompt('请输入模型名称', record.name);
  //   if (!name) return;
  //   const _record = {
  //     ...record,
  //     name
  //   };
  //   const newUploadRecords = [...uploadRecords];
  //   const index = newUploadRecords.findIndex(item => item.key === record.key);
  //   if (index !== -1) {
  //     newUploadRecords.splice(index, 1, _record);
  //     setUploadRecords(newUploadRecords);
  //   }
  //   localStorage.setItem('gltfUploadRecords', JSON.stringify(newUploadRecords));
  // }, [uploadRecords]);

  // const destroyApp = useCallback(() => {
  //   if (!app) return;
  //   const parent = app.view.parentElement;
  //   // @ts-ignore
  //   Tiny.three.Camera.main = null;
  //   Tiny.three.LightingEnvironment.main.destroy();
  //   Tiny.three.destroyTextureCache();
  //   app.renderer3d.destroy();
  //   Tiny.three.detach(app);
  //   app.destroy(true, {
  //     children: true,
  //     texture: true,
  //     baseTexture: true,
  //   });
  //   const canvas = document.createElement("canvas");
  //   canvas.id = "J-canvas";
  //   parent?.appendChild(canvas);
  //   setApp(null);
  // }, [app, setApp]);


  // const createApp = useCallback((_model?: string) => {
  //   destroyApp();

  //   const device = {
  //     width: 375,
  //     height: 812,
  //   };

  //   setTimeout(() => {
  //     const canvasEl = document.getElementById("J-canvas");
  //     if (canvasEl && canvasEl.parentElement?.className === "screen") {
  //       device.width = canvasEl.parentElement?.clientWidth;
  //       device.height = canvasEl.parentElement?.clientHeight;
  //     }

  //     const _app = new Tiny.Application({
  //       showFPS: true,
  //       dpi: 2,
  //       canvasId: "J-canvas",
  //       width: device.width,
  //       height: device.height,
  //       fixSize: true,
  //       renderType: Tiny.RENDERER_TYPE.WEBGL,
  //       renderOptions: {
  //         antialias: true,
  //         backgroundColor: 0x2a3145,
  //       },
  //     });
  //     Tiny.three.attach(_app);
  //     const main = new MainLayer({
  //       model: _model || selectModel || 'scene',
  //       scene: (_model || selectModel) ? 'scene' : undefined
  //     });
  //     _app.run(main);
  //     setApp(_app);
  //     // 等待动画播完
  //   }, 500);
  // }, [destroyApp, setApp, selectModel]);


  // const controlCamera = useCallback(() => {
  //   if (app) {
  //     const controller = new Tiny.three.CameraOrbitControl(app.view);
  //     const position = Tiny.three.Camera.main.position;
  //     controller.distance = Math.sqrt(
  //       position.x * position.x +
  //         position.y * position.y +
  //         position.z * position.z
  //     );
  //   }
  // }, [app]);

  // /**
  //  * 获取模型列表
  //  */
  // const fetchList = async () => {
  //   return fetch(`${baseUrl}/list`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const list = data.filter((i:string) => i !== 'scene');
  //       setList(list);
  //       setSelectModel(list[0] || '');
  //       createApp(list[0]);
  //     }).catch((ex) => {
  //       alert('获取列表失败，请重试');
  //     })
  // };

  // const submitGltf = async (modelName: string) => {
  //   const name = prompt('请输入模型名称，方便您记忆', modelName);
  //   if (!name) return;
  //   // 触发上传 API
  //   setLoading(true);
  //   try {
  //     const url = new URL(`${baseUrl}/upload`);
  //     const params = new URLSearchParams(url.search);
  //     params.set("folderPath", modelName);
  //     const targetUrl = url.toString() + "?" + params.toString();
  //     fetch(targetUrl)
  //       .then((res) => res.json())
  //       .then((res: {
  //         url: string;
  //       }[]) => {
  //         const gltfItem = res.filter(item => item.url.endsWith('.gltf'))[0];
  //         addUploadRecord(name, gltfItem.url);
  //         message.success("上传成功");
  //         setLoading(false);
  //       });
  //   } catch (e: any) {
  //     message.error(`上传失败 ${e && e.message}`);
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   fetchList();
  //   getUploadRecords();
  // }, []);

  // const copy = useCallback((url: string) => {
  //   const input = document.createElement('input');
  //   document.body.appendChild(input);
  //   input.setAttribute('value', url);
  //   input.select();
  //   if (document.execCommand('copy')) {
  //     document.execCommand('copy');
  //     message.success("复制成功");
  //   }
  //   document.body.removeChild(input);
  // }, []);
  // const columns = [{
  //   title: '模型名称',
  //   dataIndex: 'name',
  //   key: 'name',
  //   render: (name:string, item: UploadItem) => <a href={item.url}>{name}</a>
  // }, {
  //   title: '上传时间',
  //   dataIndex: 'uploadTime',
  //   key: 'uploadTime'
  // }, {
  //   title: '操作',
  //   key: 'action',
  //   render: (_test:string, record: UploadItem) => {
  //     return (
  //       <>
  //         <Button onClick={() => copy(record.url)}>复制链接</Button>
  //         <Button onClick={() => deleteUploadRecord(record)}>删除</Button>
  //         <Button onClick={() => editName(record)}>修改模型名称</Button>
  //       </>
  //     );
  //   }
  // }];

  // <div className="app">
    //   <div className="left-side">
    //     <h2>预览记录</h2>
    //     <Button onClick={() => exportJSON()}>批量导出JSON</Button>
    //     <Table columns={columns} dataSource={uploadRecords} />
    //   </div>
    //   <div className="right-side">
    //     <div className="button">
    //       <Button
    //         onClick={() => {
    //           controlCamera();
    //         }}
    //       >
    //         控制相机
    //       </Button>
    //     </div>
    //   </div>
  return (
      <main>
        <DeviceEmulator
          onChange={() => {
            // createApp();
          }}
        >
          {(props) => (
            <DeviceFrameset {...props}>
              <canvas id="J-canvas" />
            </DeviceFrameset>
          )}
        </DeviceEmulator>
      </main>
  );
}

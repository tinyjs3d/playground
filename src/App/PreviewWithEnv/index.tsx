import React, { useEffect, useState, useCallback } from "react";
import "./index.css";

import { Button, message, Table, Input } from "antd";
import { MainLayer } from "./game/MainLayer";

import { DeviceFrameset } from "react-device-frameset";
import { DeviceEmulator } from "react-device-frameset/lib/DeviceEmulator";
import "react-device-frameset/lib/css/marvel-devices.min.css";
import "react-device-frameset/lib/css/device-emulator.min.css";


type UploadItem = {
  name: string;
  url: string;
  key: number;
  previewTime: string;
};

export function PreviewWithEnv() {
  const [app, setApp] = useState<Tiny.Application | null>(null);
  const [mainLayer, setMainLayer] = useState<MainLayer | null>(null);
  const [gltfUrl, setGltfUrl] = useState('');
  const [previewRecords, setPreviewRecords] = useState<UploadItem[]>([]);

  const getPreviewRecords =  useCallback(() => {
    try {
      const recordsStr = localStorage.getItem('gltfPreviewRecords') || '';
      setPreviewRecords(JSON.parse(recordsStr));
    } catch(ex) {}
  }, []);

  const addPreviewRecord = useCallback((url: string) => {
    const newPreviewRecords = [...previewRecords];
    newPreviewRecords.push({
      name: url,
      url,
      key: newPreviewRecords.length ? (newPreviewRecords[newPreviewRecords.length-1].key + 1) : 0,
      previewTime: new Date().toLocaleString()
    });
    setPreviewRecords(newPreviewRecords);
    localStorage.setItem('gltfPreviewRecords', JSON.stringify(newPreviewRecords.slice(0, 9)));
  }, [previewRecords]);

  const deletePreviewRecord = useCallback((record: UploadItem) => {
    const newPreviewRecords = [...previewRecords];
    const index = newPreviewRecords.findIndex(item => item.key === record.key);
    if (index !== -1) {
      newPreviewRecords.splice(index, 1);
      setPreviewRecords(newPreviewRecords);
    }
    localStorage.setItem('gltfPreviewRecords', JSON.stringify(newPreviewRecords));
  }, [previewRecords]);

  const exportJSON = useCallback(() => {
    const fileName = prompt('请为JSON文件命名', '');
    const eleLink = document.createElement('a');
    // @ts-ignore
    eleLink.download = `${fileName}.json`;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([JSON.stringify(previewRecords.map(i => {
      return {
        name: i.name,
        url: i.url
      };
    }))]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }, [[previewRecords]]);

  const editName = useCallback((record: UploadItem) => {
    const name = prompt('请输入模型名称', record.name);
    if (!name) return;
    const _record = {
      ...record,
      name
    };
    const newUploadRecords = [...previewRecords];
    const index = newUploadRecords.findIndex(item => item.key === record.key);
    if (index !== -1) {
      newUploadRecords.splice(index, 1, _record);
      setPreviewRecords(newUploadRecords);
    }
    localStorage.setItem('gltfPreviewRecords', JSON.stringify(newUploadRecords));
  }, [previewRecords]);

  const destroyApp = useCallback(() => {
    if (!app) return;
    if (mainLayer) {
      mainLayer._destroy();
    }
    const parent = app.view.parentElement;
    // @ts-ignore
    Tiny.three.Camera.main = null;
    Tiny.three.LightingEnvironment.main.destroy();
    Tiny.three.destroyTextureCache();
    app.renderer3d.destroy();
    Tiny.three.detach(app);
    app.destroy(true, {
      children: true,
      texture: true,
      baseTexture: true,
    });
    const canvas = document.createElement("canvas");
    canvas.id = "J-canvas";
    parent?.appendChild(canvas);
    setApp(null);
  }, [app, setApp]);


  const createApp = useCallback((modelUrl?: string) => {
    destroyApp();

    const device = {
      width: 375,
      height: 812,
    };

    setTimeout(() => {
      const canvasEl = document.getElementById("J-canvas");
      if (canvasEl && canvasEl.parentElement?.className === "screen") {
        device.width = canvasEl.parentElement?.clientWidth;
        device.height = canvasEl.parentElement?.clientHeight;
      }

      const _app = new Tiny.Application({
        showFPS: true,
        dpi: 2,
        canvasId: "J-canvas",
        width: device.width,
        height: device.height,
        fixSize: true,
        renderType: Tiny.RENDERER_TYPE.WEBGL,
        renderOptions: {
          antialias: true,
          backgroundColor: 0x1e2020,
        },
      });
      Tiny.three.attach(_app);
      const main = new MainLayer({
        model: modelUrl || gltfUrl
      });
      _app.run(main);
      setApp(_app);
      setMainLayer(main);
      const controller = new Tiny.three.CameraOrbitControl(_app.view);
      controller.distance = 1.5;
    }, 700);
  }, [destroyApp, setApp, gltfUrl]);

  useEffect(() => {
    getPreviewRecords();
  }, []);

  const copy = useCallback((url: string) => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', url);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      message.success("复制成功");
    }
    document.body.removeChild(input);
  }, []);

  const columns = [{
    title: '模型名称',
    dataIndex: 'name',
    key: 'name',
    render: (name:string, item: UploadItem) => <a href={item.url}>{name}</a>
  }, {
    title: '预览时间',
    dataIndex: 'previewTime',
    key: 'previewTime'
  }, {
    title: '操作',
    key: 'action',
    render: (_test:string, record: UploadItem) => {
      return (
        <>
          <Button onClick={() => previewRecord(record.url)}>预览</Button>
          <Button onClick={() => copy(record.url)}>复制模型链接</Button>
          <Button onClick={() => deletePreviewRecord(record)}>删除记录</Button>
          <Button onClick={() => editName(record)}>重命名</Button>

        </>
      );
    }
  }];
  const previewRecord = (value: string) => {
    setGltfUrl(value);
    createApp(value);
  };
  const preview = (value:string) => {
    if (!value) {
      message.error('请先输入 gltf 链接');
      return;
    }
    setGltfUrl(value);
    createApp(value);
    addPreviewRecord(value);
  };
  return (
    <div className="app">
      <div className="left-side">
      <h2>预览记录</h2>
      <Button onClick={() => exportJSON()}>批量导出JSON</Button>
      <Table columns={columns} dataSource={previewRecords} />
      </div>
      <main>
        <div className="preview-input">
        <Input.Search
          placeholder="请输入 gltf 链接"
          allowClear
          enterButton="预览"
          size="large"
          onSearch={preview}
        />
        </div>
        <DeviceEmulator
          onChange={() => {
            createApp();
          }}
        >
          {(props) => (
            <DeviceFrameset {...props}>
              <canvas id="J-canvas" />
            </DeviceFrameset>
          )}
        </DeviceEmulator>

      </main>
    </div>
  );
}

# Tiny3d Preview 使用说明

tiny3d 目录下的 `node_modules` 被忽略，只上传构建后的 `dist` 内容。

`tiny3d/api/node_modules` 目录下的内容需要被上传，以便打包给设计师使用。

## Usage

[Node.js 官网](https://nodejs.dev/)下载 LTS 版本并安装。

> Unity 2020 虽然自带 node，但是内部 node 版本太低（6.x），2021 Node.js 最新版本已为 16.x。
> 所以最好安装 Node，所有配置默认安装即可。
> 日后可以考虑的可选方案：打包为 [Electron](https://www.electronjs.org/) 应用程序。

## 开发

- `npm run dev`: 启动前端
- `npm run serve`: 启动后端
- `npm run start`: 同时启动前端和后端
- `npm run build`: 构建前端代码到 dist 目录下
- `npm run preview`: 启动前后端（此时前端使用的是构建后 dist 代码）

## FAQ

- `@alipay/basement` upload file png to `zos`, bin to `os`, how to solve?
  - Replace all `uri` to cdn url in gltf(json) `images`

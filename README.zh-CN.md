中文 | [English](./README.md)

<h1 align="center" >Gganbu Admin</h1>

<div align="center">

开箱即用的权限后台管理系统

<!-- [![npm](https://img.shields.io/npm/v/simple-js-export)](https://www.npmjs.com/package/simple-js-export)
![npm](https://img.shields.io/npm/dw/simple-js-export) -->

![Node CI](https://github.com/sanjayheaven/gganbu-admin-FE/workflows/Node%20CI/badge.svg) ![Deploy to AWS](https://github.com/sanjayheaven/gganbu-admin-FE/workflows/Deploy%20to%20AWS/badge.svg) ![Deploy to Vercel](https://github.com/sanjayheaven/gganbu-admin-FE/workflows/Deploy%20to%20Vercel/badge.svg) ![Deploy to GitHub Pages](https://github.com/sanjayheaven/gganbu-admin-FE/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

</div>

Gganbu Admin 是一个开箱即用的权限后台管理系统。

前端基于 [React](https://reactjs.org/)、[Vite](https://vitejs.dev/)、[TypeScript](https://www.typescriptlang.org/)、[Ant Design](https://ant.design/)、[Tailwind CSS](https://tailwindcss.com/) 等最新技术栈开发。

后端基于 [Node.js](https://nodejs.org/en/)、[Koa](https://koajs.com/)、[TypeScript](https://www.typescriptlang.org/)、[Redis](https://redis.io/)、[MongoDB](https://www.mongodb.com/) 等前沿技术开发。

Gganbu Admin 提供了一个完整的中后台解决方案，包括封装常用工具、以及提供用户权限、系统管理等功能，帮助快速搭建企业级中后台项目。

## ✨ 特性

<!-- 及黑暗主题适配 -->

- 💡 **TypeScript**: 应用程序级 JavaScript 的语言
- 🚀 **最新技术栈**: 使用业界前沿技术栈开发，并持续迭代更新
- 📱 **响应式**: 基于 Tailwind CSS, 更便捷的响应式布局方案，一套代码，多种场景
- 🌐 **国际化**: 内置完善的国际化方案
- 🎨 **主题**: 可配置的主题, 满足多样化的场景需求
- 🛠️ **方案**: 丰富的业务场景模型，多样化的工具使用案例
- 🛡️ **权限**: 完善的路由权限和用户鉴权方案, 集成 **RABC** 权限控制

## 💻 预览

超级管理员(可初始化配置)

账号: **admin** 密码: **admin**

- <a href="https://sanjay-huang.com" target="_blank">AWS 站点</a> | <a href="https://gganbu-admin-fe.vercel.app" target="_blank">Vercel 站点</a> | <a href="https://sanjayheaven.github.io/gganbu-admin-FE" target="_blank">GitHub Pages 站点</a>

- [文档地址](https://sanjayheaven.github.io/gganbu-admin-docs)

![homePage](https://gganbu-admin.s3.ap-southeast-1.amazonaws.com/homePage.png)

## 🔨 安装使用

- 获取代码

```sh
git clone https://github.com/sanjayheaven/gganbu-admin-FE.git
```

- 安装依赖

```shell
cd gganbu-admin-FE && npm install
```

- 修改配置

  - 本地只运行前端，可以在 **.env.development** 中设置
    ```
    VITE_SERVER_BASE_URL=https://sanjay-huang.com/api/v1/manage
    ```
    <!-- - 本地运行后端，请参考 文档 -->

- 运行项目

```shell
npm run dev
```

- 打包构建

```shell
npm run build
```

更多信息请参考 [使用文档](https://sanjayheaven.github.io/gganbu-admin-docs)

## 🗒️ 更新日志

[CHANGELOG](https://github.com/sanjayheaven/gganbu-admin-FE/blob/main/CHANGELOG.md)

## 🛖 相关仓库

- [Gganbu Admin 前端](http://github.com/sanjayheaven/gganbu-admin-FE)
- [Gganbu Admin 后端](http://github.com/sanjayheaven/gganbu-admin-BE)
- [Gganbu Admin 文档](http://github.com/sanjayheaven/gganbu-admin-docs)

## 🤝 加入我们

Gganbu 系列项目将会持续更新，欢迎您的参与。

非常欢迎您的加入！提一个 [Issue](http://github.com/sanjayheaven/gganbu-admin-FE/issues) 或者提交一个 [Pull Request](http://github.com/sanjayheaven/gganbu-admin-FE/pulls)

## 🛡️ 使用许可

[MIT © Huang Daoxu](https://github.com/sanjayheaven/gganbu-admin-FE/blob/main/LICENSE)

# AngualrJS2 前端框架

## 环境搭建

具体步骤如下:
1. 环境准备:
    * 安装[NodeJs](http://nodejs.cn/), 配置 npm 使用源, 执行以下命令进行配置.
   
    ```
      npm config set registry http://registry.npm.taobao.org
      npm install -g typescript typings
      npm install --global --production windows-build-tools
      npm install --global node-gyp
      npm install -g @angular/cli
    ```

2. 创建项目:
   * 创建项目目录, 执行以下命令.
   
   ```
      mkdir  newProject
      cd newProject
      ng new projectName
   ```
   
## 项目运行
1. 进行项目目录, 执行 `npm install` 进行依赖模块的安装.
2. 执行 `npm start` 启动项目.
3. 打开浏览器访问: [http://localhost:4200] 即可看到网站页面.


### 参考文档
* [TypeScript AIP](https://www.tslang.cn/docs/tutorial.html)
* [AngularJS2 API](https://angular.cn/docs/ts/latest/)


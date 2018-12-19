# react通用开发模板

## 工程说明
*** 基于react官方脚手架创建的通用模板 ***
* 为每个页面单独创建模块
* 封装路由控制，避免路由在各个页面乱用

## 使用说明
### 首次使用
* 执行 npm install 安装所需依赖
* 项目中对原有的react配置文件做了修改，首次使用需要做好配置参数保证项目正常运行
> node_modules -> react-scripts -> paths.js
```javascript
appIndexJs: resolveApp('src/index.js'),
修改为：(确保index文件路径正确关联)
appIndexJs: resolveModule(resolveApp, 'src/app/index.js'),
```
```javascript
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}
修改为：(编译后确保index.html文件引用的资源为相对路径)
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : './');
  return ensureSlash(servedUrl, true);
}
```
* 执行 npm start 运行项目


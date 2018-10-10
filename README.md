# ionic-boilerplate

with test tool &amp;&amp; push service &amp;&amp; update service &amp;&amp; code lint &amp;&amp; ...

## 支持项

see:https://github.com/pengkobe/reading-notes/issues/420

- 开发流程与规范, see [README-dev-spec](./README-dev-spec.md)
- 运行环境介绍 √
- 代码规范 √
- 测试[单元测试/端到端测试] √
- 远程推送 √
- 版本更新( apk ) √
- 代码热更新 √
- 物理返回键双击退出 √
- 目录结构支持从项目主目录相对定位 √
- 覆盖 ionic cli 默认配置 √
- tslint 与 scsslint √
- 去除开机白屏 √
- Angular 最佳实践自动检测 √
- 定义好目录结构 √
- 支持本地通知与远程通知 √
- 支持多语言[中/英] √
- 服务 √
- Cordova 插件 √
  - 社交分享
  - 地理定位
- 错误上报 √
- 用户行为 √
- http
- 本地存储 √
- 钩子( hooks ) √
- NGRX
- 技巧与工具( vscode、谷歌控制台等 )
- 常用组件

## 运行环境介绍

本脚手架运行环境为:

```bash
Ionic:

   ionic (Ionic CLI)  : 4.1.2
   Ionic Framework    : ionic-angular 3.9.2
   @ionic/app-scripts : 3.1.11

Cordova:

   cordova (Cordova CLI) : not installed
   Cordova Platforms     : not available
   Cordova Plugins       : cordova-plugin-ionic-keyboard 2.1.3, cordova-plugin-ionic-webview 2.2.0, (and 28 other plugins)

System:

   NodeJS            : v8.9.1
   npm               : 5.5.1
   OS                : Windows 10
```

### android

主要基于 android@6.4.0 运行，由于很多插件不兼容，不能运行 android@7，运行后会报错

## 代码规范

see: [code-spec](./doc/code-spec.md)

## 版本更新

see: [version-update](./doc/version-update.md)

## 远程推送

jpush-phonegap-plugin, see: https://github.com/jpush/jpush-phonegap-plugin

```bash
cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
npm install --save @jiguang-ionic/jpush
```

## Cordova 插件

see: [cordova-plugin](./doc/cordova-plugin.md)

### 国际化

基于 ngx-translate, see：https://github.com/ngx-translate/core

版本需要与 angular 对应的版本相匹配

```bash
npm install @ngx-translate/core@9.1.1 --save
npm install @ngx-translate/http-loader@2.0.1 --save
```

## ngrx
see: https://github.com/ngrx

## 钩子

位于文件夹 `hooks` 下, 可以写各个声明周期的钩子

## 本地存储

尽量不使用 localstorage，系统清内存时会被整掉

## 错误上报

基于 raven-js

```bash
npm install raven-js --save
```

## 用户行为
基于 TalkingData Cordova 插件进行开发，需要在官网下载最新库文件。
* 官网：https://www.talkingdata.com/  
* 集成文档: http://doc.talkingdata.com/posts/143  

## refer

https://github.com/marcoturi/ionic-boilerplate

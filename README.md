# ionic-boilerplate

with test tool &amp;&amp; push service &amp;&amp; update service &amp;&amp; code lint &amp;&amp; ...

## 使用

```bash
git clone https://github.com/pengkobe/ionic-boilerplate
cd ionic-boilerplate
npm install
npm install -g commitizen
commitizen init cz-conventional-changelog --save --save-exact
```

## 支持项

> 部分参考自: https://github.com/pengkobe/reading-notes/issues/420

- 开发流程与代码规范, see [README-dev-spec](./doc/code-spec.md)
  - git √
  - 实用工具介绍 √
  - 代码检测 √
  - 部署
- 运行环境介绍 √
- 测试支持[单元测试/端到端测试] √
- 远程推送 √
- 版本更新( apk ) √
- 代码热更新 √
- 物理返回键双击退出 √
- 目录结构支持从项目主目录相对定位 √
- 覆盖 ionic cli 默认配置 √
- tslint 与 scsslint √
- 去除开机白屏等待 √
- Angular 最佳实践自动检测 √
- 定义好目录结构 √
- 支持本地通知与远程通知 √
- 支持多语言[中/英] √
- 服务 √
- Cordova 插件
  - 社交分享 ×
  - 地理定位 √
- 错误上报 √
- http √
  - rebirth-http √
- 本地存储 √
  - rebirth-storage √
- 钩子( hooks ) √
- NGRX √
- 支持 RxJS@6+ √
- 技巧与工具( VSCODE、谷歌控制台等 )
- 集成 echarts √
- 常用组件 √
  - 二维码扫描 √
  - 日历 √
- 主题更换
- 用户行为

## 运行环境介绍

本脚手架运行环境为( base on command: `ionic info`):

```bash
Ionic:

   ionic (Ionic CLI)  : 4.1.2
   Ionic Framework    : ionic-angular 3.9.2
   @ionic/app-scripts : 3.1.11

Cordova:

   cordova (Cordova CLI) : not installed
   Cordova Platforms     : android 6.4.0

System:

   NodeJS            : v8.9.1
   npm               : 5.5.1
   OS                : Windows 10
```

### android

主要基于 android@6.4.0 运行，由于很多插件不兼容，不能运行 android@7，运行后会报错

## 代码规范

代码规范与常见工具说明  
see: [code-spec](./doc/code-spec.md)

## 版本更新

支持 APK 版本更新与线上代码热更新  
see: [version-update](./doc/version-update.md)

## Cordova 插件

脚手架使用到的 Cordova 插件列表
see: [cordova-plugin](./doc/cordova-plugin.md)

## 国际化

基于 ngx-translate, see：https://github.com/ngx-translate/core

版本需要与 angular 对应的版本相匹配

```bash
npm install @ngx-translate/core@9.1.1 --save
npm install @ngx-translate/http-loader@2.0.1 --save
```

## NGRX

脚手架已集成 NGRX  
see: https://github.com/ngrx

## 钩子

位于文件夹 `hooks` 下, 可以写各个声明周期的钩子，目前包含的钩子有

- 020_remove_sass_from_platforms, 删除不必要的 sass 文件
- 010_update_config, 根据 package.json 中的版本号更新 config.xml
- 010_init_directories, 用于创建 plugins 与 platforms 文件夹

## 本地存储

使用 `@ionic/storage`，尽量不使用 localstorage，系统清内存时会被删掉

## 错误上报

基于 raven-js 上报错误信息至第三方平台。  
文档地址：https://docs.sentry.io/clients/javascript/

```bash
npm install raven-js --save
```

## 用户行为

基于 TalkingData 进行统计，Github 上有相应 Cordova 插件，需要在官网下载最新库文件，手动进行集成

- 官网：https://www.talkingdata.com/
- 集成文档: http://doc.talkingdata.com/posts/143
- Cordova 插件模板: https://github.com/TalkingData/AppAnalytics_SDK_Cordova 

## 集成 echarts

see: https://golb.hplar.ch/2017/02/Integrate-ECharts-into-an-Ionic-2-app.html

## 技巧与工具( VSCODE、谷歌控制台等 )

see: [tools](./doc/tools.md)

## 常用组件

这里提供的常用组件有这些

- 二维码扫描
- 日历，see: https://github.com/HsuanXyz/ion2-calendar

## 换肤

一个高大上的 App 肯定少不了换肤功能，但是 Ionic 已经足够好，已经帮我们实现大部分了，具体实现可以参考:  
https://ionicframework.com/docs/theming/

## 参考

https://github.com/marcoturi/ionic-boilerplate

## License

MIT@[yipeng.info](https://yipeng.info)

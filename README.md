# ionic-boilerplate

with test tool &amp;&amp; push service &amp;&amp; update service &amp;&amp; code lint &amp;&amp; ...

## Things to do

see:https://github.com/pengkobe/reading-notes/issues/420

- 代码规范
- 远程推送
- 版本更新( apk )
- 代码热更新
- 物理返回键双击退出
- 目录结构支持从项目主目录定位
- 覆盖 ionic cli 默认配置
- tslint 与 scsslint
- 去除开机白屏
- Angular 最佳实践自动检测
- 定义好目录结构
- 支持本地通知与远程通知
- 支持多语言[中/英]
- 服务
- 错误上报
- 用户行为
- http
- 本地存储( cache/disk )
- native

## 代码热更新

cordova-hot-code-push-plugin, see: https://github.com/nordnet/cordova-hot-code-push

### 安装与使用

```bash
cordova plugin add cordova-hot-code-push-plugin
# Add plugin for local development
cordova plugin add cordova-hot-code-push-local-dev-addon
# Install Cordova Hot Code Push CLI client:
npm install -g cordova-hot-code-push-cli
# Start local server by executing:
cordova-hcp server
```

### 构建

```bash
npm run build --prod
cordova-hcp build
```

> 注意: 需要对 www/chcp.json 进行稍许更改，模板可以参考 version_update/chcp.json

修改完成后，将整个 `www` 内的内容上传至服务器  
参考

- https://github.com/pengkobe/reading-notes/issues/352

## 代码规范

codelyzer, see: https://github.com/mgechev/codelyzer

```bash
npm i tslint-angular
```

## 远程推送

jpush-phonegap-plugin, see: https://github.com/jpush/jpush-phonegap-plugin

```bash
cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
npm install --save @jiguang-ionic/jpush
```

## Native

### ionic-native

```json
{
  "@ionic-native/background-mode": "^4.3.1",
  "@ionic-native/camera": "^4.3.1",
  "@ionic-native/core": "^4.4.0",
  "@ionic-native/file": "^4.2.0",
  "@ionic-native/file-opener": "^4.4.2",
  "@ionic-native/file-transfer": "^4.1.0",
  "@ionic-native/insomnia": "^4.3.3",
  "@ionic-native/local-notifications": "^4.7.0",
  "@ionic-native/media": "^4.0.1",
  "@ionic-native/network": "^4.4.2",
  "@ionic-native/qr-scanner": "^4.5.2",
  "@ionic-native/splash-screen": "^4.4.0",
  "@ionic-native/status-bar": "^4.4.0",
  "@ionic-native/vibration": "^4.5.2",
  "@ionic/storage": "^2.1.3",
  "@jiguang-ionic/jpush": "^1.0.2"
}
```

### cordova-plugin

```json
{
  "cordova-plugin-device": {},
  "cordova-plugin-splashscreen": {},
  "cordova-plugin-statusbar": {},
  "cordova-plugin-whitelist": {},
  "ionic-plugin-keyboard": {},
  "cordova-plugin-file": {},
  "cordova-plugin-media": {
    "MICROPHONE_USAGE_DESCRIPTION": " "
  },
  "cordova-plugin-screen-locker": {},
  "cordova-plugin-screenshot": {},
  "cordova-plugin-app-event": {},
  "cordova-plugin-app-version": {},
  "cordova-plugin-background-mode": {},
  "cordova-plugin-baidumaplocation": {
    "ANDROID_KEY": "",
    "IOS_KEY": "",
    "IOS_LOCATION_DESC": ""
  },
  "cordova-plugin-camera": {
    "CAMERA_USAGE_DESCRIPTION": " ",
    "PHOTOLIBRARY_USAGE_DESCRIPTION": " "
  },
  "cordova-plugin-datepicker": {},
  "cordova-plugin-file-opener2": {},
  "cordova-plugin-file-transfer": {},
  "cordova-plugin-network-information": {},
  "cordova-plugin-pause-resume-download": {},
  "cordova-plugin-screen-orientation": {},
  "cordova-plugin-vibration": {},
  "cordova-plugin-wechat": {
    "WECHATAPPID": ""
  },
  "de.appplant.cordova.plugin.local-notification": {},
  "es6-promise-plugin": {},
  "talkingdata": {},
  "cordova-plugin-logtofile": {},
  "cordova-plugin-insomnia": {},
  "com.unarin.cordova.beacon": {},
  "phonegap-nfc": {},
  "cordova-plugin-qrscanner": {},
  "TalkingData": {},
  "cordova-hot-code-push-plugin": {},
  "cordova-android-support-gradle-release": {},
  "cordova-sqlite-storage": {},
  "jpush-phonegap-plugin": {
    "APP_KEY": ""
  }
}
```

### 国际化

ngx-translate, see：https://github.com/ngx-translate/core

版本需要与 angular 对应的版本相匹配

```bash
npm install @ngx-translate/core@9.1.1 --save
npm install @ngx-translate/http-loader@2.0.1 --save
```

## refer

https://github.com/marcoturi/ionic-boilerplate

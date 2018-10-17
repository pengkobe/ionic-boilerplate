# Cordova 插件

## ionic-native

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

## cordova-plugin

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

## 远程推送

jpush-phonegap-plugin, see: https://github.com/jpush/jpush-phonegap-plugin

```bash
cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
npm install --save @jiguang-ionic/jpush
```

### 社交分享

cordova-plugin-wechat

### 定位

cordova-plugin-baidumaplocation

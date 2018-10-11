# 开发流程与代码规范

## 开发流程

### 仓库

托管在码云私有仓库上

### 分支管理

![git 分支管理规范](./img/git-version-ctrl.png)

### 提交流程

基于 commitizen, see: https://github.com/commitizen/cz-cli

## 代码规范

- JavaScript 代码规范, 参见业界公认的 airbnb 规范: https://github.com/airbnb/javascript
- Angular 规范，直接参考官网: https://angular.io/guide/styleguide , 默认已集成部分检测工具， 如 `tslint-angular`，手动检测可以执行命令 `npm run lint`

### 工具

这里囊括一些已经用到或者以后需要用到的一些工具

### codelyzer

see: https://github.com/mgechev/codelyzer

```bash
npm i tslint-angular
```

### ionic docker

see: https://github.com/marcoturi/ionic-docker

### type doc

自动根据注释生成文档的工具， see: https://github.com/TypeStrong/typedoc/

### better-npm-run

能够去除配置文件硬编码
see: https://github.com/benoror/better-npm-run

### scsslint

https://sass-guidelin.es/#tools

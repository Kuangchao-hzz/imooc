# imooc-mobile

> A Vue.js project

## 安卓和ISO系统，对中文字体是不支持
```html
ios 系统

默认中文字体是Heiti SC
默认英文字体是Helvetica
默认数字字体是HelveticaNeue

android 系统

默认中文字体是Droidsansfallback
默认英文和数字字体是Droid Sans
无微软雅黑字体

如无特殊需求，手机端无需定义中文字体，使用系统默认即可。
英文字体和数字字体可使用 Helvetica ，三种系统都支持。

body{font-family:Helvetica;}
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

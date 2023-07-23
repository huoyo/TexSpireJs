
<div align="center">
    <h1 >TexSpireJs</h1> 
</div>

<div align="center">
    <h2>为程序员定制的网页播放和演示组件</h2> 
</div>

<div align="center">
    <img src='https://gitee.com/huoyo/tex-spire-js/badge/star.svg'>
    <img src='https://shields.io/badge/version-1.0.0-green.svg'>
    <img src='https://shields.io/badge/author-Chang Zhang-dbab09.svg'>
    <img src='https://shields.io/badge/dependencies-ecgarts.js-r.svg'>
</div>

<h4>TexSpireJs是一个使用js制作像ppt一样播放网页的组件库，内置了很多基础的组件如：列表、表格、折线图、词云图、柱状图等等</h4>

## 演示

使用TexSpire制作的[演示文档](http://www.texspire.cn/view/4872afc97a974e1e8e35b26c5b4f853a?fullscreen=true&staticnavmenu=true&sc=gitee)

如果阁下需要一个更优雅和简单的**文字生成演示效果**的在线工具，请参考[TexSpire](http://www.texspire.cn?sc=gitee)

## 使用参考

1、基础用法，参考[base.html](demo/base.html)

2、图表用法，参考[chart.html](demo/chart.html)

## 教程

### 引入依赖

```html
<link rel="styleSheet" type="text/css" href="../src/TexSpire.css">
<script src="../src/TexSpire.js"></script>
```

### 定义容器

```html
<div id="viewpages"></div>
```

### 初始化

```javascript

window.onload = function () {
    /*初始化TexSpire*/
    let texSpire = new TexSpire('viewpages');
}
```

### 添加内容

> 添加第一页

```javascript
 /*创建一个普通页面 设置为居中（也可以设置为left）*/
texSpire.createPage("文本框演示", "Huoyo", "center");
/*设置第0页组件排列方向 h为横向 v为纵向*/
texSpire.setContentDirection(0, 'h');
/*在第0页添加一个有标题的文本框到页面*/
texSpire.createTitleTextToPage(0, "文本标题", "文本内容", 400, 400);

```

> 添加第二页

```javascript
texSpire.createPage("列表演示", "Huoyo", "center");
texSpire.setContentDirection(1, 'h')
texSpire.createListCardToPage(1, "列表标题", ['任务1', '任务2'], 'radio', 400, 400)

```

### 播放

```javascript
/*从第0页开始播放*/
texSpire.playPage(0);
```
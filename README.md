# orange-can-step-by-step

说明：鉴于小程序的版本更新，我会加入新的内容作为学习笔记。

## 第一章和第二章 
快速阅读，同时把官方教程快速过一遍，从第三章开始实践。

小程序官方教程：
* [简易教程](https://developers.weixin.qq.com/miniprogram/dev/)
* [框架](https://developers.weixin.qq.com/miniprogram/dev/framework/MINA.html)
* [组件](https://developers.weixin.qq.com/miniprogram/dev/component/)
* [API](https://developers.weixin.qq.com/miniprogram/dev/api/)
* [工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

## 第三章

知识点
1. 使用弹性布局：`display:flex`
2. 对于需要随着屏幕尺寸变化而变化的元素，使用自适应单位：`rpx`
3. 建议： 以 iPhone6 的宽度 750 个物理像素作为标准得到：`1物理像素=1rpx=0.5px`
4. 顶部导航栏 `window` 的配置项在 `app.json` 中配置，对各个页面的个性化配置则在各个页面的 `json` 文件中，如 welcome 页面在 `welcome.json` 配置。

## 第四章

知识点
1. Boolean值的陷阱：元素属性的值是字符串，需要使用`{{}}`数据绑定语法才能把值变为`bool`型
2. css 样式可以使页面化腐朽为神奇，应熟练掌握，使用。学习地址：[css](http://www.w3school.com.cn/css/), [css3](http://www.w3school.com.cn/css3/index.asp), [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html), [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html), [Grid 布局指南（上）](https://zhuanlan.zhihu.com/p/33030746), [Grid 布局指南（下）](https://zhuanlan.zhihu.com/p/33031255)
3. image组件的4种缩放模式和9种裁剪模式
    * scaleToFill
    * aspectFit
    * aspectFill
    * widthFix
    * top
    * bottom right
    * ... ([详见文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html))
4. 页面生命周期
    * onLoad: 加载，一个页面只会调用一次
    * onShow: 显示，每次打开页面都会调用
    * onReady: 渲染，一个页面只会调用一次
    * onHide: 隐藏，如执行 `navigateTo` 方法，或使用tab栏切换页面
    * onUnload: 卸载，如执行 `redirectTo` 方法，或 `navigateBack` 方法
5. 页面的特定事件处理函数
    * onPullDownPrefresh: 监听用户下拉页面事件处理函数 
    * onReachBottom: 监听页面上拉触底事件处理函数
    * onShareAppMessage: 用户点击右上角分享
    * onPageScroll: 页面滚动触发事件的处理函数
    * onTabItemTap: 当前是 tab 页时，点击 tab 时触发
6. 设置页面数据，会使页面 `Rerender`（会触发 `onShow` ）,见下图：
    ![](mina-lifecycle.png)
7. 小程序使用 Mustache 语法双大括号 `{{}}` 在 wxml 组件里进行数据绑定。页面数据绑定的两种方式：
    * 初始化数据绑定，数据写在 `Page(Object)` 方法 Object 对象参数的 `data:{}` 属性里。
    * 使用 `setData(Object)` 方法做数据绑定，这样的数据更新会引起页面 Rerender（重新渲染），参考上图。
8. 注意复杂对象绑定时，页面引用的数据结构的方式。
9. `setData(Object)` 方法的对象参数的 `key` 很灵活，如 `"collectionNum.array[0]":"111"`。数据绑定出问题目前没有任何异常提示，请通过调试面板里的 `AppData` tab页查看排除。
10. 用 `<block></block>` 标签进行列表渲染，属性 `wx:for` 值为要绑定的数据(数组)，属性 `wx:for-item`  值为要遍历的变量名，属性 `wx:for-index` 的值为索引变量。
11. `redirectTo(Object)` 方法会触发卸载(onUnload)事件，`navigateTo(Object)` 方法会触发隐藏(onHide)事件，跳转后右上角有返回图标。使用 `navigateTo(Object)` 方法跳转建议不要超过3层。`redirectTo(Object)` 和 `navigateTo(Object)` 只能打开非 tabBar 页面。
12. `switchTab(Object)` 方法只能用在 tabbar 选型卡的跳转。`reLaunch(Object)` 可以打开任意页面。
13. 常见冒泡事件：
    * `touchstart` 手指触摸动作开始
    * `touchmove` 手指触摸后移动
    * `touchcancel` 手指触摸动作被打断，如来电，弹窗等
    * `touchend` 手指触摸动作结束
    * `tap` 手指触摸后马上离开
    * `longtap` 手指触摸后，超过350ms再离开
14. 页面元素绑定事件时，需要在事件名称前面添加 `catch` 或 `bind` 前缀,如 `catchtap`。区别：
    * `catch`前缀将阻止事件继续向父节点传播
    * `bind`前缀不会阻止
15. 除以上6种事件外，其他基本都是非冒泡事件，如 `<form/> 的 submit` 事件，`<input/> 中的 input` 事件，`<scroll-view/> 的 scroll` 事件等。

## 第五章 模块，模版与缓存
知识点

1. 小程序开发代码组织架构调整，依照软件设计原则：低耦合，分层，模块化，MVVM等。
2. 小程序的模版目前只能封装wxml和wxss，不能封装js。模版中使用的js需要在父页面中引用。
3. 消除template模版对外部变量名的依赖，使用扩展运算符：`{{...变量名}}`
4. 引入模版的方式有import和include。区别：
    * include页面渲染时只是简单的替换。模版文件需去掉 `<template></template>` 标签
    * import可以使用 data 属性传输数据
5. 在 `app.js` 文件中使用 `App(object)` 注册小程序，并在object中指定小程序的生命周期函数等。应用程序的生命周期：
    * onLaunch  全局只触发一次
    * onShow
    * onHide
    * onError
6. 使用 ES6 语法写程序。
7. 小程序的缓存没有过期时间，就是一个本地数据库。当数据有变化时，要注意更新缓存。

## 第六章
知识点

1. 事件只能在组件上绑定。标签如 `block`，`template` 不能绑定事件。
2. 页面间传递参数，一般用 url 的 `query参数` 传递。另外还可以通过 `全局变量`，`缓存`传递。
3. `event` 事件对象中，有一个 `currentTarget` 代表事件绑定的当前组件。
4. `event.currentTarget.dataset` 对象包含当前组件中所有属性名以 `data-` 开头的属性值.
4. 组件的自定义属性规则如下：
    * 必须以 `data-` 开头
    * 多个单词用连字符 `-` 连接
    * 单词中最好不要有大写字母，若有，除单词第一个字母外，其余大写字母将被转成小写
    * 在js中获取自定义属性时，多个单词将被转化为驼峰命名，如 `data-pOST-ID` 将转为 `dataset.postId`, `data-postId` 将转为 `dataset.postid`
    * 通过 `dataset` 获取属性值需要把 `data-` 前缀去掉。如 `data-pOST-ID` 为 `dataset.postId`, `data-postId` 为 `dataset.postid`
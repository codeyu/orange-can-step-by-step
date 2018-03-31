# orange-can-step-by-step

## 第三章

知识点
1. 使用弹性布局：`display:flex`
2. 对于需要随着屏幕尺寸变化而变化的元素，使用自适应单位：`rpx`
3. 建议： 以 iPhone6 的宽度 750 个物理像素作为标准得到：`1物理像素=1rpx=0.5px`
4. 顶部导航栏 `window` 的配置项在 `app.json` 中配置

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
6. 设置页面数据，会使页面 `Rerender`（会触发 `onShow` ）,见下图：
    ![](mina-lifecycle.png)
7. 小程序使用 Mustache 语法双大括号 `{{}}` 在 wxml 组件里进行数据绑定。页面数据绑定的两种方式：
    * 初始化数据绑定，数据写在 `Page(Object)` 方法 Object 对象参数的 `data:{}` 属性里。
    * 使用 `setData(Object)` 方法做数据绑定，这样的数据更新会引起页面 Rerender（重新渲染），参考上图。
8. 注意复杂对象绑定时，页面引用的数据结构的方式
9. `setData(Object)` 方法的对象参数的 `key` 很灵活，如 `"collectionNum.array[0]":"111"`。数据绑定出问题目前没有任何异常提示，请通过调试面板里的 `AppData` tab页查看排除。
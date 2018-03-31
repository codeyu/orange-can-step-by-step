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

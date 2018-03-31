// pages/post/post.js
var dataObj = require("../../data/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //date: "Mar 31 2018",
    //title: "看哈根达斯如何成为最贵最成功的冰淇凌",
    //postImg: "/images/post/post-4.jpg",
    //avatar: "/images/avatar/avatar-3.png",
    //content: "身在冰淇淋行业中，没有人是不知道哈根达斯的。在冰淇淋行业中，哈根达斯就堪比香奈儿、爱马仕这样的奢侈品品牌，女孩子们也对其情有//独钟。要知道，哈根达斯冰淇淋的价格是普通冰淇淋的5-10倍，但是 ...",
    //readingNum: 900,
    //collectionNum: { array: [101] },
    //commentNum: 4
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      postList: dataObj.postList
    })
    console.log("onLoad: 加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady: 渲染");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow: 显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide: 隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload: 卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
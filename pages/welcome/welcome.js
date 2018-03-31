Page({
  onTapJump: function (event) {
    wx.navigateTo({
      url: '../post/post',
      success: function () {
        console.log("jump success");
      },
      fail: function () {
        console.log("jump fail");
      },
      complete: function () {
        console.log("jump complete");
      }
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
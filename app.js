
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var key = "postList";
    var storageData = wx.getStorageSync(key)
    if (!storageData) {
      var dataObj = require("data/data.js")
      wx.clearStorageSync();
      wx.setStorage({
        key: key,
        data: dataObj.postList,
        success: function () {
          //success
        },
        fail: function () {
          //fail
        },
        complete: function () {
          //complete
        }
      })
    }

  },
  globalData:{
    g_isPlayingMusic:false,
    g_currentMusicPostId:null

  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg);
  }
})

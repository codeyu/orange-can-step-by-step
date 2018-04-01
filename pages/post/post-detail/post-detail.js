// pages/post/post-detail/post-detail.js
import { DBPost } from "../../../db/DBPost.js";
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.dbPost = new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({
      post: this.postData
    });
    this.addReadingTimes();
    this.setMusicMonitor();
    this.initMusicStatus();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.postData.title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //wx.stopBackgroundAudio();
    //this.setData({
    //  isPlayingMusic:false
    //})
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

  },

  onCollectionTap: function (event) {
    var newData = this.dbPost.collect();
    this.setData({
      'post.collectionStatus': newData.collectionStatus,
      'post.collectionNum': newData.collectionNum
    });
    wx.showToast({
      title: newData.collectionStatus?'收藏成功':'取消收藏',
      duration:1000,
      icon:"success",
      mask:true
    })
  },
  onUpTap: function (event) {
    var newData = this.dbPost.up();
    this.setData({
      'post.upStatus': newData.upStatus,
      'post.upNum': newData.upNum
    });
    wx.showToast({
      title: newData.upStatus ? '点赞成功' : '取消点赞',
      duration: 1000,
      icon: "success",
      mask: true
    })
  },
  onCommentTap:function(event){
    var id = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../post-comment/post-comment?id='+id,
    })
  },
  addReadingTimes:function(){
    this.dbPost.addReadingTimes();
  },
  onMusicTap:function(event){
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      });
      app.globalData.g_isPlayingMusic = false;
    }
    else {
      wx.playBackgroundAudio({
        dataUrl: this.postData.music.url,
        title: this.postData.music.title,
        coverImgUrl: this.postData.music.coverImg
      })
      this.setData({
        isPlayingMusic: true
      });
      app.globalData.g_isPlayingMusic = true;
      app.globalData.g_currentMusicPostId = this.postData.postId;
    }
  },
  setMusicMonitor: function () {
    var that = this;
    wx.onBackgroundAudioStop(function () {
      that.setData({
        isPlayingMusic: false
      });
      app.globalData.g_isPlayingMusic = false;
    });
    wx.onBackgroundAudioPlay(function (event) {
      // 只处理当前页面的音乐播放。
      if (app.globalData.g_currentMusicPostId === that.postData.postId) {
        that.setData({
          isPlayingMusic: true
        })
      }
      app.globalData.g_isPlayingMusic = true;
    });

    wx.onBackgroundAudioPause(function () {
      // 只处理当前页面的音乐暂停。
      if (app.globalData.g_currentMusicPostId == that.postData.postId) {
        that.setData({
          isPlayingMusic: false
        })
      }
      app.globalData.g_isPlayingMusic = false;
    });
  },
  initMusicStatus: function () {
    var currentPostId = this.postData.postId;
    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === currentPostId){
      this.setData({
        isPlayingMusic: true
      })
    }
    else{
      this.setData({
        isPlayingMusic: false
      })
    }
    
  }
})
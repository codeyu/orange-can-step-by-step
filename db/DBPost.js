class DBPost {
  constructor(url) {
    this.storageKeyName = "postList";
  }

  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require("../data/data.js").postList;
      this.execSetStorageSync(res);
    }
    return res;
  }
  execSetStorageSync() {
    wx.setStorageSync(this.storageKeyName);
  }
};
export { DBPost }
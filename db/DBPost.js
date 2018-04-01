class DBPost {
  constructor(postId) {
    this.storageKeyName = "postList";
    this.postId = postId;
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
  getPostItemById() {
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for (var i = 0; i < len; i++) {
      if (postsData[i].postId == this.postId) {
        return {
          index: i,
          data: postsData[i]
        }
      }
    }
  }
  updatePostData(action) {
    const itemData = this.getPostItemById();
    let postData = itemData.data;
    let allPostData = this.getAllPostData();
    switch (action) {
      case "collect":
        if (!postData.collectionStatus) {
          postData.collectionStatus = true;
          postData.collectionNum++;
        } else {
          postData.collectionStatus = false;
          postData.collectionNum--;
        }
        break;
      case "up":
        if (!postData.upStatus) {
          postData.upStatus = true;
          postData.upNum++;
        } else {
          postData.upStatus = false;
          postData.upNum--;
        }
        break;
      default:
        break;
    }
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }
  collect() {
    return this.updatePostData('collect');
  }
  up(){
    return this.updatePostData('up');
  }
};
export { DBPost }
var util = require('../util/util.js')
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
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
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
  updatePostData(action, newComment) {
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
      case "comment":
        postData.comments.push(newComment);
        postData.commentNum++;
        break;
      case "reading":
        postData.readingNum++;
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
  up() {
    return this.updatePostData('up');
  }
  getCommentData() {
    var itemData = this.getPostItemById().data;
    itemData.comments.sort(this.compareWithTime);
    var len = itemData.comments.length, comment;
    for (var i = 0; i < len; i++) {
      comment = itemData.comments[i];
      comment.create_time = util.getDiffTime(comment.create_time, true);
    }
    return itemData.comments;
  }
  newComment(newComment){
    this.updatePostData('comment', newComment);
  }
  addReadingTimes(){
    this.updatePostData("reading");
  }
  compareWithTime(value1, value2) {
    var flag = parseFloat(value1.create_time) - parseFloat(value2.create_time);
    if (flag < 0) {
      return 1;
    } else if (flag > 0) {
      return -1
    } else {
      return 0;
    }
  }
};
export { DBPost }
// pages/publish/publish.js
Page({

  /**
   * Page initial data
   */
  data: {
    t: " ",
    d: " ",
    y: " ",
    n1: " ",
    n2: " ",
    o: " ",
    a: " ",
  },

  title: function (e) {
    this.setData({
      t: e.detail.value
    })
  },

  description: function (e) {
    this.setData({
      d: e.detail.value
    })
  },
  type: function (e) {
    this.setData({
      y: e.detail.value
    })
  },
  num1: function (e) {
    this.setData({
      n1: e.detail.value
    })
  },
  num2: function (e) {
    this.setData({
      n2: e.detail.value
    })
  },
  open: function (e) {
    this.setData({
      o: e.detail.value
    })
  },
  add: function (e) {
    this.setData({
      a: e.detail.value
    })
  },
  loginBtnClick: function (e) {
    wx.setStorageSync('t', this.data.t);
    wx.setStorageSync('d', this.data.d);
    wx.setStorageSync('y', this.data.y);
    wx.setStorageSync('n1', this.data.n1);
    wx.setStorageSync('n2', this.data.n2);
    wx.setStorageSync('o', this.data.o);
    wx.setStorageSync('a', this.data.a);
    wx.navigateTo({
      url: '/pages/publish/qa/qa'
    })
  },
  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }

})
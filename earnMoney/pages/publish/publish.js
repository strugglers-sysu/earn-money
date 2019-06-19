// pages/publish/publish.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  setBasic: function (e) {
    if (e.detail.value.title
      && e.detail.value.description
      && e.detail.value.type
      && e.detail.value.num1
      && e.detail.value.num2
      && e.detail.value.num3
      && e.detail.value.reward) {
      wx.setStorageSync('ti', e.detail.value.title);
      wx.setStorageSync('d', e.detail.value.description);
      wx.setStorageSync('ty', e.detail.value.type);
      wx.setStorageSync('n1', e.detail.value.num1);
      wx.setStorageSync('n2', e.detail.value.num2);
      wx.setStorageSync('n3', e.detail.value.num3);
      wx.setStorageSync('r', e.detail.value.reward);
      wx.navigateTo({
        url: '/pages/publish/qa/qa',
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '请填写完整问卷信息',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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
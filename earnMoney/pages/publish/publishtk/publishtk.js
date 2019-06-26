// earnMoney/pages/publish/publishqa/publishqa.js
var app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * 设置问卷基本信息，跳转到补充问题信息的页面
   */
  setBasic: function (e) {
    if (e.detail.value.type
      && e.detail.value.description
      && e.detail.value.reward
      && e.detail.value.des
      && e.detail.value.time) {
      var money = e.detail.value.num3 * e.detail.value.reward
      console.log("所需总金额￥" + money)
      if (money <= app.globalData.userInfo.wallet) {
        wx.setStorageSync('ty', e.detail.value.type);
        wx.setStorageSync('d', e.detail.value.description);
        wx.setStorageSync('r', e.detail.value.reward);       
        wx.setStorageSync('de', e.detail.value.des);
        wx.setStorageSync('ti', e.detail.value.time);
        wx.navigateTo({
          url: '/pages/publish/publishqa/qa/qa',
        })
      }
      else {
        wx.showModal({
          title: '提示',
          content: '你的“闲钱币”不足，请充值',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
              wx.navigateBack({
                delta: 1
              })
            }
          }
        })
      }
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
            wx.navigateBack({
              delta: 1
            })
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

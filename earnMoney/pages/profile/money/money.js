// pages/profile/about/about.js

var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: app.globalData.userInfo,
    detail: {
      avatarUrl: '/res/images/money_avatar.jpeg',
      nickName: '账户',
      wallet: 0
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
    db.collection('users').where({
      _openid: app.globalData.userInfo.openid
    }).get().then(res => {
      this.setData({
        'detail.avatarUrl': res.data[0].avatarUrl,
        'detail.nickName': res.data[0].nickName,
        'detail.wallet': res.data[0].wallet,
      })
    })
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
// pages/profile/userInfo/userInfo.js

var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: app.globalData.userInfo,
    detail: {
      type: '',
      sid: '',
      name: '',
      age: '',
      gender: '',
      grade: '',
      pro: ''
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (app.globalData.userInfo.type == 'student') {
      db.collection('users').where({
        _openid: app.globalData.userInfo.openid
      }).get().then(res => {
        this.setData({
          'detail.type': res.data[0].type,
          'detail.sid': res.data[0].sid,
          'detail.name': res.data[0].name,
          'detail.age': res.data[0].age,
          'detail.gender': res.data[0].gender,
          'detail.grade': res.data[0].grade,
          'detail.pro': res.data[0].pro
        })
      })
    }
    else {
      db.collection('users').where({
        _openid: app.globalData.userInfo.openid
      }).get().then(res => {
        this.setData({
          'detail.name': res.data[0].name
        })
      })
    }
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
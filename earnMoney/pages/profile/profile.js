// pages/profile/profile.js

var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    logged: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，设置用户已登录
          this.setData({
            logged: true
          })
        }
      }
    })
  },

  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true
      })
    }

    db.collection('users').where({
      _openid: app.globalData.userInfo.openid
    }).count().then(res => {
      console.log(res.total)
      // 新用户，添加到数据库
      if (res.total == 0) {
        db.collection('users').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            avatarUrl: e.detail.userInfo.avatarUrl,
            nickName: e.detail.userInfo.nickName,
            wallet: new Number(0)
          },
          success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
            app.globalData.userInfo.id = res._id
          },
          fail: console.error
        })
        wx.navigateTo({
          url: './pick_userType/pick_userType',
        })
      }
      // 老用户，访问数据库，设置本地变量
      else {
        db.collection('users').where({
          _openid: app.globalData.userInfo.openid
        }).get().then(res => {
          app.globalData.userInfo.id = res.data[0]._id
          app.globalData.userInfo.type = res.data[0].type
        })
      }
    })
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
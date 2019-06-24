// pages/profile/profile.js

var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    login: false,
    items: [
      { name: 'student', value: '学生', checked: 'true' },
      { name: 'cow', value: '奶牛' }
    ],
    userType: 'student'
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      userType: e.detail.value
    })
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
            login: true
          })
        }
      }
    })
  },

  onGetUserInfo: function (e) {
    if (!this.login && e.detail.userInfo) {
      this.setData({
        login: true
      })
    }
    console.log('用户类型为：', this.data.userType)
    app.globalData.userInfo.type = this.data.userType

    db.collection('users').where({
      _openid: app.globalData.userInfo.openid
    }).count().then(res => {
      console.log(res.total)
      // 新用户，添加到数据库
      if (res.total == 0) {
        if (this.data.userType == 'student') {
          db.collection('users').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
              avatarUrl: e.detail.userInfo.avatarUrl,
              nickName: e.detail.userInfo.nickName,
              wallet: new Number(0),
              type: this.data.userType,
              sid: '',
              name: '',
              age: '',
              gender: '',
              grade: '',
              pro: ''
            },
            success: function (res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log(res)
              app.globalData.userInfo.id = res._id
            },
            fail: console.error
          })
        }
        else {
          db.collection('users').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
              avatarUrl: e.detail.userInfo.avatarUrl,
              nickName: e.detail.userInfo.nickName,
              wallet: new Number(0),
              type: this.data.userType,
              name: ''
            },
            success: function (res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log(res)
              app.globalData.userInfo.id = res._id
            },
            fail: console.error
          })
        }
        
        // wx.navigateTo({
        //   url: '/pages/profile/pick_userType/pick_userType',
        // })
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
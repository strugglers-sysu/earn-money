// pages/profile/userInfo_modify/userInfo_modify.js

const app = getApp()

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

  },

  setUserInfro: function (e) {
    if (app.globalData.userInfo.type == 'student'
    && e.detail.value.sid 
    && e.detail.value.name 
    && e.detail.value.age 
    && e.detail.value.gender 
    && e.detail.value.grade 
    && e.detail.value.pro) {
      db.collection('users').doc(app.globalData.userInfo.id).update({
        // data 传入需要局部更新的数据
        data: {
          sid: e.detail.value.sid,
          name: e.detail.value.name,
          age: e.detail.value.age,
          gender: e.detail.value.gender,
          grade: e.detail.value.grade,
          pro: e.detail.value.pro
        }
      })
      .then(console.log)
      .catch(console.error)

      wx.showToast({ // 显示Toast
        title: '已修改',
        icon: 'success',
        duration: 10000,
        mask: true,
        success(res) {
          wx.switchTab({
            url: '/pages/profile/profile',
          })
        }
      }) 
    }
    else if (app.globalData.userInfo.type == 'cow'
      && e.detail.value.name) {
      db.collection('users').doc(app.globalData.userInfo.id).update({
        // data 传入需要局部更新的数据
        data: {
          name: e.detail.value.name
        }
      })
      .then(console.log)
      .catch(console.error)

      wx.showToast({ // 显示Toast
        title: '已修改',
        icon: 'success',
        duration: 10000,
        mask: true,
        success(res) {
          wx.switchTab({
            url: '/pages/profile/profile',
          })
        }
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '请填写完整信息',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
  }
})
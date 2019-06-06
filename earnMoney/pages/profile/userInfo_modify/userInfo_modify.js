// pages/profile/userInfo_modify/userInfo_modify.js

const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: app.globalData.userInfo    
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
    this.setData({
      'userInfo.name': app.globalData.userInfo.name,
      'userInfo.email': app.globalData.userInfo.email,
      'userInfo.school': app.globalData.userInfo.school
    })
    // 为什么不加这一段，数据没有修改，按理说button的触发事件已经可以对数据进行修改了啊
    // 而且加了这一段后，会显示不能被赋予未定义的值，这里涉及data实例化高得不是很明白
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
    if (e.detail.value.name && e.detail.value.email && e.detail.value.school) {
      this.setData({
        'userInfo.name': e.detail.value.name,
        'userInfo.email': e.detail.value.email,
        'userInfo.school': e.detail.value.school
      })
      app.globalData.userInfo.name = e.detail.value.name
      app.globalData.userInfo.email = e.detail.value.email
      app.globalData.userInfo.school = e.detail.value.school
      // wx.request({
      //   url: '', // 需要后端
      //   method: POST,
      //   data: {
      //     userInfo: '',
      //     y: ''
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success(res) {
      //     console.log(res.data)
      //   }
      // })
      // console.log(userInfo.name) // why 会报错
      // console.log(app.globalData.userInfo.name) // 不会报错
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
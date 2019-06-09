// pages/profile/about/about.js

var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    activeIndex: 0,//默认选中第一个
    numArray: [10, 20, 30, 50, 100, 200, 300, 500, 1000]
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

  },
  activethis: function (event) {//点击选中事件
    var thisindex = event.currentTarget.dataset.thisindex;//当前index
    this.setData({
      activeIndex: thisindex
    })
  },
  chargeMoney: function () {//充值
    db.collection('users').where({
      _openid: app.globalData.userInfo.openid
    }).get().then(res => {
      db.collection('users').doc(app.globalData.userInfo.id).update({
        // data 传入需要局部更新的数据
        data: {
          wallet: res.data[0].wallet + this.data.numArray[this.data.activeIndex]
        }
      })
      .then(console.log)
      .catch(console.error)
    })

    wx.showToast({ // 显示Toast
      title: '充值成功',
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
})
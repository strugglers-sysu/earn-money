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
    app.globalData.userInfo.wallet += this.data.numArray[this.data.activeIndex]
    db.collection('users').where({
      _openid: app.globalData.userInfo.openid
    }).get().then(res => {
      db.collection('users').doc(app.globalData.userInfo.id).update({
        // data 传入需要局部更新的数据
        data: {
          wallet: app.globalData.userInfo.wallet
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
        // var pages = getCurrentPages();//当前页面栈
        // if (pages.length > 1) {
        //   var beforePage = pages[pages.length - 2];//获取上一个页面实例对象
        //   var currPage = pages[pages.length - 1]; // 当前页面，若不对当前页面进行操作，可省去
        //   // beforePage.setData({       //如果需要传参，可直接修改A页面的数据，若不需要，则可省去这一步
        //   //   id: res.data.data
        //   // })
        //   beforePage.onLoad();//触发父页面中的方法
        // }
        wx.navigateBack({
          delta: 2
        })
      }
    })
  }
})
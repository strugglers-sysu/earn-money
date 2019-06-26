// pages/home/questionnaire/questionnaire.js
var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    task: {},
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    db.collection('tasks').where({
      _id: options.id
    }).get().then(res => {
      this.setData({
        task: res.data[0]
      })
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    wx.hideLoading()  //showLoading 只能用此语句关闭
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

  submitQuestionnaire: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    db.collection('users').where({
      _id: app.globalData.userInfo.id
    }).get().then(res2 => {
      db.collection('answers').add({
        data: {
          nickName: res2.data[0].nickName,
          whoFill: app.globalData.userInfo.id,
          publisher: this.data.task.publisher,
          taskId: this.data.task._id,
          createTime: new Date(),
          answer: e.detail.value
        }
      })
        .then(res => {
          console.log(res)
          // 显示Toast并返回首页
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 10000,
            mask: true,
            success(res) {
              wx.switchTab({
                url: '/pages/home/home',
              })
            }
          })
        })
        .catch(console.error)
    })
  }
})
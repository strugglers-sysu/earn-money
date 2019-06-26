// earnMoney/pages/profile/task_history/task_result/task_result.js
var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    publisher: '',
    date: '',
    task: {},
    answerList: []
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options.id)
    db.collection('tasks').where({
      _id: options.id
    }).get().then(res => {
      var util = require('../../../../utils/util.js')
      this.setData({
        task: res.data[0],
        date: util.formatTime(res.data[0].createTime)
      })
      db.collection('users').where({
        _id: res.data[0].publisher
      }).get().then(res1 => {
        this.setData({
          publisher: res1.data[0].nickName
        })
      })
      db.collection('answers').where({
        taskId: res.data[0]._id
      }).get().then(res1 => {
        this.setData({
          answerList: res1.data
        })
      })
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

  naviToInfo: function (e) {
    let index = e.currentTarget.dataset.index;
    console.log('id', index)
    wx.navigateTo({
      url: '/pages/profile/task_history/result_info/result_info?id=' + index
    })
  }
})
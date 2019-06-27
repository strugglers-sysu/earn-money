// pages/home/taskInfo/taskInfo.js
var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    loading: false,
    disabled: false,
    buttonContent: '填写问卷',
    publisher: '',
    date: '',
    task: {}
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options.id)
    db.collection('tasks').where({
      _id: options.id
    }).get().then(res => {
      var util = require('../../../utils/util.js')
      this.setData({
        task: res.data[0],
        date: util.formatTime(res.data[0].createTime)
      })
      if (res.data[0].publisher == app.globalData.userInfo.id) {
        this.setData({
          disabled: true,
          buttonContent: '该问卷为本人发布，不能填写',
        })
      }
      else if (res.data[0].remain <= 0) {
        this.setData({
          disabled: true,
          buttonContent: '该问卷已填写完毕，不能填写',
        })
      }
      else {
        db.collection('answers').where({
          taskId: res.data[0]._id,
          whoFill: app.globalData.userInfo.id
        }).count().then(res1 => {
          if (res1.total > 0) {
            this.setData({
              disabled: true,
              buttonContent: '您已填写该问卷，不能重复填写',
            })
          }
        })
      }

      db.collection('users').where({
        _id: res.data[0].publisher
      }).get().then(res1 => {
        this.setData({
          publisher: res1.data[0].nickName
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
  toQuestionaire: function(e) {
    this.setData({
      loading: true
    })
    wx.navigateTo({
      url: '/pages/home/questionnaire/questionnaire?id=' + this.data.task._id,
      // url='/pages/home/taskInfo/taskInfo?id={{item.id}}'
    })
    this.setData({
      loading: false
    })

  }
})
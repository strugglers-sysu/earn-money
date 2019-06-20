// pages/home/taskInfo/taskInfo.js

const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    loading: false,
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
      this.setData({
        task: res.data[0],
        date: res.data[0].createTime.toString()
      })
    })
    db.collection('users').where({
      _openid: this.data.task._openid
    }).get().then(res => {
      console.log(res.data)
      this.setData({
        publisher: res.data[0].nickName
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
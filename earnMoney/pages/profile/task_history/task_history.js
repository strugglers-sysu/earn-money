
var app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    cardList: [
      {
        name: 'aa',
        content: 'bb'
      }, 
    ],
    top_navigation_bar_content: ['我发布的', '我做过的'],
    currentTab: 0,
    taskList: [],
    answerList: []
  },

  topnavbarTap: function(e) {
    this.setData({
      'currentTab': e.currentTarget.dataset.idx
    })
    console.log(this.data.currentTab)
    // console.log(currentTab) 不能通过名字调用，会出现 ReferenceError: currentTab is not defined
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    db.collection('tasks').where({
      _openid: app.globalData.userInfo.openid
    }).get().then(res => {
      console.log(res.data)
      this.setData({
        taskList: res.data
      })
    })
    db.collection('answers').where({
      whoFill: app.globalData.userInfo.id
    }).get().then(res => {
      console.log(res.data)
      this.setData({
        answerList: res.data
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

  naviToInfo: function (e) {
    let index = e.currentTarget.dataset.index;
    console.log('id', index)
    wx.navigateTo({
      url: '/pages/profile/task_history/task_result/task_result?id=' + index
    })
  }
})
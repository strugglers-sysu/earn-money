// pages/home/home.js
var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    search: {
      focus: false,
      history: [],
      input: "",
    },
    taskList: [],
    classification: ["task", "questionnaire", "cow", "student"]
  }, 
  // 监听软键盘确认键
  wxSearchConfirm: function (e) {

  },
  wxSearchOnfocus: function() {
    this.setData({
      'search.focus': true
    })
  }, 
  wxSearchInput: function() {
    this.setData({
      'search.focus': true
    })
  }, 
  wxSearchClear: function () {
    this.setData({
      'search.input': "",
      'search.focus': false
    })
  },
  wxSearchBack: function() {
    this.setData({
      'search.focus': false
    })
  },
  checkboxChange: function(e) {
    console.log('id', e.detail.name)
    var selected = e.detail.value;
    console.log('selected', selected)
    db.collection('tasks').get().then(res => {
      console.log(res.data)
      this.setData({
        taskList: res.data
      })
    })
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
    db.collection('tasks').get().then(res => {
      console.log(res.data)
      this.setData({
        taskList: res.data
      })
    })
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
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: '',
      method: "GET",
      header: {
        'content-type': 'application/text'
      },
      complete: function (res) {
        // that.setData({
        //   moment: res.data.data
        // });
        console.log(that.data.moment);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      // title: '玩命加载中',
    })
    // 页数+1
    // page = page + 1;
    wx.request({
      url: '',
      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      complete: function (res) {
        // 回调函数
        // var moment_list = that.data.moment;
        // const oldData = that.data.moment;
        // that.setData({
        //   moment: oldData.concat(res.data.data)
        // })
        // 隐藏加载框
        wx.hideLoading();
      }
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  
  naviToInfo: function(e) {
    
    let index = e.currentTarget.dataset.index;
    console.log('id', index)
    wx.navigateTo({
      url: '/pages/home/taskInfo/taskInfo?id=' + index
    })
  }
})
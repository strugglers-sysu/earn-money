// pages/home/home.js
var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    taskList: [
      // {
      //   id: 0,
      //   publisher: 'WJH',
      //   time: '2019-05-23',
      //   title: 'Game in your life',
      //   theme: 'Game',
      //   number: 10,
      //   remainingNumber: 5,
      //   money: 10,
      //   Fillers: [

      //   ],
      //   questionList: [
      //     {
      //       id: 1,
      //       type: 0,
      //       question: 'What games do you play',
      //       answer: ''
      //     },
      //     {
      //       id: 2,
      //       type: 0,
      //       question: 'How much time do you play games every week',
      //       answer: ''
      //     },
      //     {
      //       id: 3,
      //       type: 1,
      //       question: 'How much time do you play games every week',
      //       optionalAnswers: [
      //         'a day',
      //         'one hour',
      //         'two hour',
      //         'three minutes'
      //       ],
      //       answer: ''
      //     }
      //   ]
      // },
      // {
      //   id: 1,
      //   publisher: 'QW',
      //   time: '2019-05-23',
      //   title: 'About your Eating habits',
      //   theme: 'Eat',
      //   number: 10,
      //   remainingNumber: 6,
      //   money: 10,
      //   Fillers: [

      //   ],
      //   questionList: [
      //     {
      //       id: 1,
      //       type: 0,
      //       question: 'Do you have the habit of having supper',
      //       answer: ''
      //     },
      //     {
      //       id: 2,
      //       type: 0,
      //       question: 'Are you on a diet now',
      //       answer: ''
      //     }
      //   ]
      // },
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    db.collection('tasks').get().then(res => {
      console.log(res.data)
      this.setData({
        taskList: res.data
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
    
    let index = parseInt(e.currentTarget.dataset.index);
    console.log('index', index)
    wx.navigateTo({
      url: '/pages/home/taskInfo/taskInfo?id=' + index
    })
  }
})
// pages/home/taskInfo/taskInfo.js
Page({

  /**
   * Page initial data
   */
  data: {
    loading: false,
    task: {
      id: 0,
      publisher: 'WJH',
      starttime: '2019-05-23',
      endtime: '2019-06-23',
      title: 'Game in your life',
      number: 10,
      remainingNumber: 5,
      money: 10,
      content: '这是一套针对网络游戏、网页游戏和上网习惯的专业网络调查问卷，题目一方面想了解玩家的生活情况，另一面涵盖网游类型、题材和游戏玩法设计、交易系统等核心要素，可充分了解网游玩家的真实想法，是每位玩家发表自己对网游内心观点的最佳场所，同时也可以帮助游戏从业者加深对网游市场的调查研究！',
      Fillers: [

      ],
      questionList: [
        {
          id: 1,
          type: 0,
          question: 'What games do you play',
          answer: ''
        },
        {
          id: 2,
          type: 0,
          question: 'How much time do you play games every week',
          answer: ''
        },
        {
          id: 3,
          type: 1,
          question: 'How much time do you play games every week',
          optionalAnswers: [
            'a day',
            'one hour',
            'two hour',
            'three minutes'
          ],
          answer: ''
        }
      ]
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      // url: 'options.id',
    })
    console.log(options.id)

    // console.log('have a try')
    // wx.setStorage({
    //   key: "task",
    //   data: task
    // })
    // console.log(task.id) why
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
      url: '/pages/home/questionnaire/questionnaire?id=task.id',
      // url='/pages/home/taskInfo/taskInfo?id={{item.id}}'
    })
    this.setData({
      loading: false
    })

  }
})
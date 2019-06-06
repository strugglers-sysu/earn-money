// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    taskList: [
      {
        id: 1,
        publisher: 'WJH',
        time: '2019-05-23',
        title: 'Game in your life',
        theme: 'Game',
        number: 10,
        remainingNumber: 5,
        money: 10,
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
      },
      {
        id: 2,
        publisher: 'QW',
        time: '2019-05-23',
        title: 'About your Eating habits',
        theme: 'Eat',
        number: 10,
        remainingNumber: 6,
        money: 10,
        Fillers: [

        ],
        questionList: [
          {
            id: 1,
            type: 0,
            question: 'Do you have the habit of having supper',
            answer: ''
          },
          {
            id: 2,
            type: 0,
            question: 'Are you on a diet now',
            answer: ''
          }
        ]
      },
    ]
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
  // jumpTo: function(e) {
  //   var index = parseInt(e.currentTarget.dataset.index);
  //   wx.navigateTo({
  //     url = '/pages/home/taskInfo/taskInfo?id=' + index
  //   }); 
  // }
})
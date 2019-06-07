// pages/home/questionnaire/questionnaire.js
Page({

  /**
   * Page initial data
   */
  data: {
    task: {
      id: 1,
      publisher: 'WJH',
      starttime: '2019-05-23',
      endtime: '2019-06-23',
      title: 'Game in your life',
      number: 10,
      remainingNumber: 5,
      money: 10,
      content: '这是一套针对网络游戏、网页游戏和上网习惯的专业网络调查问卷，题目一方面想了解玩家的生活情况，另一面涵盖网游类型、题材和游戏玩法设计、交易系统等核心要素，可充分了解网游玩家的真实想法，是每位玩家发表自己对网游内心观点的最佳场所，同时也可以帮助游戏从业者加深对网游市场的调查研究！',
      questionList: [
        {
          id: 0,
          type: 0,
          question: 'What games do you play',
          answer: ''
        },
        {
          id: 1,
          type: 0,
          question: 'Do you play games in teams',
          answer: ''
        },
        {
          id: 2,
          type: 1,
          question: 'How much time do you play games every week',
          optionalAnswers: [
            { id: 0, option: 'a day', isChecked: false}, 
            { id: 1, option: 'one hour', isChecked: false }, 
            { id: 2, option: 'two hour', isChecked: false }, 
            { id: 3, option: 'three minutes', isChecked: false},
          ],
        }
      ],
      Fillers: [

      ],
    },
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showLoading({ title: '加载中', })
    // var that = this
    // wx.getStorage({
    //   key: 'task',
    //   success: function (res) {
    //     that.setData({
    //       task: res.data
    //     })
    //   }
    // })
    // console.log(task.id) why
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
    // e.detail.value.name
  },
  checkboxChange: function(e) {
    // console.log('id', e.detail.id)
    console.log('id', e.detail.name)
    var selected = e.detail.value;
    // console.log('length', selected.length)
    // for (var i = 0; i < selected.length; ++i) {
    //   console.log('index', selected[i])
    // }
    // console.log("------------------------------------")
    
    // try second
    if (selected.length > 1) {
      var optionalAnswers = this.data.task.questionList[2].optionalAnswers;
      for (var i = 0; i < optionalAnswers.length; ++i) {
        if (i == selected[selected.length - 1]) {
          var isChecked = 'task.questionList[2].optionalAnswers[' + i + '].isChecked'
          this.setData({
            // 'data.task.questionList[2].optionalAnswers[0].isChecked': false
            [isChecked]: true
          })
        } else {
          var isChecked = 'task.questionList[2].optionalAnswers[' + i + '].isChecked'
          this.setData({
            // 'data.task.questionList[2].optionalAnswers[0].isChecked': false
            [isChecked]: false
          })
        }
      }
    }

    // try first
    // console.log(this.data.task)
    // if (selected.length >= 1) {
    //   console.log('first', this.data.task.questionList[2].optionalAnswers)
    //   var optionalAnswers = this.data.task.questionList[2].optionalAnswers;
    //   for (var i = 0; i < optionalAnswers.length; ++i) {
    //     if (i == selected[selected.length - 1]) {
    //       optionalAnswers[i].isChecked = true;
    //     } else {
    //       optionalAnswers[i].isChecked = false;
    //     }
    //   }
    //   this.setData({
    //     'data.task.questionList[2].optionalAnswers': optionalAnswers
    //   })
    //   console.log('second', this.data.task.questionList[2].optionalAnswers)
    // }

    // 一个奇淫的技巧
    // var isChecked = 'task.questionList[2].optionalAnswers[' + selected[0] + '].isChecked'
    // this.setData({
    //   // 'data.task.questionList[2].optionalAnswers[0].isChecked': false
    //   [isChecked]: false
    // })
   
  //   console.log('isChecked', this.data.task.questionList[1].optionalAnswers[0].isChecked)
  //   var questionList = this.data.task.questionList
  //   console.log()
  //   if(selected.length == 1) {
  //     for (var i = 0; i < questionList.length; ++i) {
  //       if (questionList[i].type == 1) {
  //         for (var k = 0; k < questionList[i].optionalAnswers.length; ++k) {
  //           if (questionList[i].optionalAnswers[k].isChecked == true && k != selected[0]) {
  //             this.setData({
  //               'task.questionList[i].optionalAnswers[k].isChecked': false
  //             })
  //           }
  //         }
  //       }
  //     }
  //   }
  }
})
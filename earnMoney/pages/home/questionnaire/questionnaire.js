// pages/home/questionnaire/questionnaire.js

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
    // e.detail.value.name
  },
  checkboxChange: function(e) {
    // console.log('id', e.detail.id)
    console.log('id', e.detail.name)
    var selected = e.detail.value;
    console.log('selected', selected)
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

var app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    title: "",
    description: "",
    type: "",
    num1: "",
    num2: "",
    num3: "",
    reward: ""
  },

  onLoad: function (options) {
    this.setData({
      title: wx.getStorageSync('ti'),
      description: wx.getStorageSync('d'),
      type: wx.getStorageSync('ty'),
      num1: wx.getStorageSync('n1'),
      num2: wx.getStorageSync('n2'),
      num3: wx.getStorageSync('n3'),
      reward: wx.getStorageSync('r')
    });
  },

  setQuestionnaire: function (e) {
    var questionList = []
    var index = 1
    for(var i = 0; i < this.data.num1; i++, index++){
      questionList = questionList.concat([{
        id: index,
        type: 0,
        question: e.detail.value['singlechoice' + i],
        options: [e.detail.value['option1' + i], 
          e.detail.value['option2' + i],
          e.detail.value['option3' + i],
          e.detail.value['option4' + i]]
      }])
    }
    for (var i = 0; i < this.data.num2; i++ , index++) {
      questionList = questionList.concat([{
        id: index,
        type: 1,
        question: e.detail.value['shortanswer' + i],
      }])
    }
    db.collection('tasks').add({
      data: {
        title: this.data.title,
        createTime: new Date(),
        description: this.data.description,
        type: this.data.type,
        total: this.data.num3,
        remain: this.data.num3,
        reward: this.data.reward,
        questionList: questionList
      }
    })
    .then(res => {
      console.log(res)

      // 减少“闲钱币”
      var money = this.data.num3 * this.data.reward
      app.globalData.userInfo.wallet -= money
      db.collection('users').doc(app.globalData.userInfo.id).update({
        data: {
          wallet: app.globalData.userInfo.wallet
        }
      })
      .then(console.log)
      .catch(console.error)

      // 显示Toast并返回首页
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 10000,
        mask: true,
        success(res) {
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      }) 

    })
    .catch(console.error)
}
})
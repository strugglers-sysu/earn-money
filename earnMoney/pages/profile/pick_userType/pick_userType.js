// earnMoney/pages/profile/pick_userType/pick_userType.js

const app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'student', value: '学生', checked: 'true' },
      { name: 'cow', value: '奶牛' }
    ],
    userType: 'student'
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      userType: e.detail.value
    })
  },

  setUserType: function () {
    console.log('用户类型为：', this.data.userType)
    app.globalData.userInfo.type = this.data.userType
    if (this.data.userType == 'student') {
      db.collection('users').doc(app.globalData.userInfo.id).update({
        // data 传入需要局部更新的数据
        data: {
          type: this.data.userType,
          sid: '',
          name: '',
          age: '',
          gender: '',
          grade: '',
          pro: ''
        }
      })
      .then(console.log)
      .catch(console.error)
    }
    else {
      db.collection('users').doc(app.globalData.userInfo.id).update({
        // data 传入需要局部更新的数据
        data: {
          type: this.data.userType,
          name: ''
        }
      })
        .then(console.log)
        .catch(console.error)
    }
    

    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
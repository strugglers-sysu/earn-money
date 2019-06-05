// miniprogram/pages/editInfo/editInfo.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid: '',
    name: '',
    age: '',
    sex: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onSidChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      sid: event.detail
    })
  },

  onNameChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      name: event.detail
    })
  },

  onAgeChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      age: event.detail
    })
  },

  onSexChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      sex: event.detail
    })
  },

  submitInfo: function () {
    db.collection('users').add({
      data: {
        sid: this.data.sid,
        name: this.data.name,
        age: new Number(this.data.age),
        sex: this.data.sex
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: console.error
    })
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
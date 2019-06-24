// earnMoney/pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_navigation_bar_content: ['任务', '问卷'],
    currentTab: 0,
    taskinfoList: [
      "名称",
      "描述",
      "报酬",
      "截止日期",
    ],
    qainfoList: [
      "名称",
      "描述",
      "报酬",
      "数量",
      "截止日期",
    ]
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  topnavbarTap: function(e) {
    this.setData({
      'currentTab': e.currentTarget.dataset.idx
    })
    console.log(this.data.currentTab)
    // console.log(currentTab) 不能通过名字调用，会出现 ReferenceError: currentTab is not defined
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

  },

  /**
   * 跳转到发布问卷页面
   */
  toPublishQa: function () {
    wx.navigateTo({
      url: '/pages/publish/publishqa/publishqa'
    })
  }
})
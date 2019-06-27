// earnMoney/pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_navigation_bar_content: ['任务', '问卷'],
    currentTab: 0,
    taskinfoList: [
      "发布任务包含：取快递、取外卖、跑腿等等",
      "取快递，出闲钱请同学帮忙取快递",
      "取外卖，出闲钱请同学帮忙取快递",
      "跑腿，出闲钱请同学帮忙跑腿",
    ],
    qainfoList: [
      "发布问卷为问卷调研，填写相应信息，发布一定数量问卷，完成问卷的书写，即可获得相应的闲钱",
      "问题类型包括单选题和简单题",
      "在输入问卷信息时需要填写单选题和简单题个数",
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
  },

  /**
   * 跳转到发布任务页面
   */
  toPublishTa: function () {
    wx.navigateTo({
      url: '/pages/publish/publishta/publishta'
    })
  }
})
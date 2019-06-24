Page({
  data: {
    cardList: [
      {
        name: 'aa',
        content: 'bb'
      }, 
    ],
    top_navigation_bar_content: ['已完成', '处理中'],
    currentTab: 0
  },
  topnavbarTap: function(e) {
    this.setData({
      'currentTab': e.currentTarget.dataset.idx
    })
    console.log(this.data.currentTab)
    // console.log(currentTab) 不能通过名字调用，会出现 ReferenceError: currentTab is not defined
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

  }
})
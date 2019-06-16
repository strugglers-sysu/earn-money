Page({
  data: {
    t: " ",
    d: " ",
    y: " ",
    n1: " ",
    n2: " ",
    o: " ",
    a: " ",
  },
  onLoad: function (options) {
    var t1 = wx.getStorageSync('t');
    var t2 = wx.getStorageSync('d');
    var t3 = wx.getStorageSync('y');
    var t4 = wx.getStorageSync('n1');
    var t5 = wx.getStorageSync('n2');
    var t6 = wx.getStorageSync('o');
    var t7 = wx.getStorageSync('a');
    this.setData({ t: t1 });
    this.setData({ d: t2 });
    this.setData({ y: t3 });
    this.setData({ n1: t4 });
    this.setData({ n2: t5 });
    this.setData({ o: t6 });
    this.setData({ a: t7 });
  },
  // 用户点击右上角分享
  onShareAppMessage: function () {
 
  }
})
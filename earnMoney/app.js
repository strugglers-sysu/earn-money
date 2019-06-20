//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    // 调用云函数，获取openid
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        this.globalData.userInfo.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 设置用户id和type
          const db = wx.cloud.database()
          db.collection('users').where({
            _openid: this.globalData.userInfo.openid
          }).get().then(res => {
            this.globalData.userInfo.id = res.data[0]._id
            this.globalData.userInfo.type = res.data[0].type
            this.globalData.userInfo.wallet = res.data[0].wallet
          })
        }
      }
    })
  },
  globalData: {
    userInfo: {
      id: '',
      openid: '',
      type: '',
      wallet: ''
    }
  }
})
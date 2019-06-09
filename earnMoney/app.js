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
        this.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })

    // this.globalData = {}
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log("i am success")
    //     if(0) {
    //       wx.switchTab({
    //         url: '/pages/profile/profile'
    //       })
    //     } else {
    //       wx.navigateTo({
    //         url: '/pages/home/home',
    //       })
    //     }
    //   },
    //   complete: () => {
    //     console.log("i am complete")
    //   },
    //   fail: () => {
    //     console.log("i am fail")
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     console.log("已经授sucess权")
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       console.log("已经授权")
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //           console.log("get userInfo success")
    //           wx.switchTab({
    //             url: '/pages/home/home'
    //           })
    //         }
    //       })
    //     }
    //     console.log("没进来")
    //   },
    //   fail: () => {
    //     console.log("be failed")
    //   }
    // })
  },
  globalData: {
    openid: "",
    userInfo: {
      status: 0,
      name: 'WJH',
      email: '7777777@qq.com',
      school: 'SYSU'
    }
  }
})
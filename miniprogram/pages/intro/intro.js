// pages/intro/intro.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },

  /**
   * Lifecycle function--Called when page load
   */
  showQrcode: function () {
    wx.previewImage({
      current: 'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/intro/添加二维码.png',
      urls: ['cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/intro/添加二维码.png']
    })
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '15321850185',
      fail(){
        console.log('拨打失败');
      }
    })
  },
  saveContact: function () {
    wx.addPhoneContact({
      firstName: '沛',
      lastName: '王',
      remark: 'JAVA后端开发工程师',
      mobilePhoneNumber: '15321850185',
      weChatNumber: 'ZMC369023741',
      success(){
      },
      fail(){
        console.log('保存失败');
      }
    })
  },
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
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
})
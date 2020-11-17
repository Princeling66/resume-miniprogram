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
      current: 'cloud://hequn.6865-hequn-1302876179/image/wx.jpg',
      urls: ['cloud://hequn.6865-hequn-1302876179/image/wx.jpg']
    })
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '13260878599',
      fail(){
        console.log('拨打失败');
      }
    })
  },
  saveContact: function () {
    wx.addPhoneContact({
      firstName: '群',
      lastName: '贺',
      remark: 'JAVA后端开发工程师',
      mobilePhoneNumber: '13260878599',
      weChatNumber: 'YLQ07072015',
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
const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/shqu/2.png',
        'cloud://hequn.6865-hequn-1302876179/shqu/3.png',
        'cloud://hequn.6865-hequn-1302876179/shqu/4.png',
        'cloud://hequn.6865-hequn-1302876179/shqu/fa.png',
        'cloud://hequn.6865-hequn-1302876179/shqu/home.png',
        "cloud://hequn.6865-hequn-1302876179/shqu/login.png",
        "cloud://hequn.6865-hequn-1302876179/shqu/mz.png",
        "cloud://hequn.6865-hequn-1302876179/shqu/re.png",
        "cloud://hequn.6865-hequn-1302876179/shqu/user.png",
        "cloud://hequn.6865-hequn-1302876179/shqu/yuyue.png"
      ],
      descriptionList: [
        '一、公众号前端部分UI'
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/sqht/1.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/2.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/3.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/4.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/5.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/6.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/7.png',
        'cloud://hequn.6865-hequn-1302876179/sqht/8.png'
      ],
      descriptionList: [
        '二、、公众号后端部分UI',
      ]
    }]
  },
  clickImg(event) {
    console.log('event', event);
    const imageUrl = event.currentTarget.dataset.url

    wx.previewImage({
      current: imageUrl,
      urls: [imageUrl]
    })
  },
  onUnload: function () {},
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
});
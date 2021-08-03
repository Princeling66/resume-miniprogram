const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都首页.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都后台.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都货源清单.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都停供单.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都复供单.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都询比价.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都比价.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/nddy/南都采购价格档案.png'
      ],
      descriptionList: [
        '南都电源SRM系统后台部分页面'
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
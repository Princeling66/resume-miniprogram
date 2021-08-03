const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/srm首页.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/管理后台首页.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/新建验厂单.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/组织架构管理.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/srm供应商主数据.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/物料主数据.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺首页.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺访厂单管理.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺资质单管理.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺检验试车单管理.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺供应商主数据.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺物料主数据.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/qqt4.0/旺旺询价管理.png'
      ],
      descriptionList: [
        'SRM4.0部分后台页面'
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
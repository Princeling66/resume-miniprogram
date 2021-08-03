const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/blog/博客首页.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/blog/博客首页2.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/blog/博客时间轴.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/blog/博客友情链接.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/blog/文章1.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/blog/文章2.png'
      ],
      descriptionList: [
        '一、博客部分页面'
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
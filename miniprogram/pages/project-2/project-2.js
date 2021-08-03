const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/扫码登录.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/第三方登录1.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/登录提醒.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/供应商订单提醒.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/供应商订单确认.png',
        "/hggl/采购方订单确认提醒.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/发货通知.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/预警提醒.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/待办任务提醒.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/合同模板详情.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/合同审批.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/销售方询价单提醒及报价.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/询价提醒.png",
        "cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/报价.png"
      ],
      descriptionList: [
        '一、公众号前端部分UI'
      ]
    },{
      imageUrlList: [
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/首页.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/招标管理.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/标准合同.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/询报价.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/议价.png',
        'cloud://resume-2gd4yatq8e6b4535.7265-resume-2gd4yatq8e6b4535-1305215252/hggl/供应商主数据.png'
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
const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/0首页.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/1-1列表.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/1-2商品详情-在线留言.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/1-2商品详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/1-4购物车.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-1个人中心-我的订单-去评价.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-1个人中心-我的订单.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-2个人中心-我的收藏.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-3个人中心-我的足迹.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-4个人中心-个人资料.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-5个人中心-修改密码.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-6个人中心-收货地址.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/2-7我的评价-我的评价.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/注册.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/登录.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/pc/纪元佳品-结算.png',
      ],
      descriptionList: [
        '一、PC端部分页面UI'
      ]
    }, {
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/0注册.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/0登录.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/0找回密码.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/0纪元佳品首页.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/1.0纪元佳品分.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/1.1商品横排版.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/1.1商品横竖排版.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/1.2商品详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/3.1提交订单.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/3购物车.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/4.0我的纪元.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/4.1收货地址.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/4.2交易完成.jpg',
        'cloud://hequn.6865-hequn-1302876179/纪元佳品/app/4.3商品评价.jpg'
      ],
      descriptionList: [
        '二、APP端部分UI',
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
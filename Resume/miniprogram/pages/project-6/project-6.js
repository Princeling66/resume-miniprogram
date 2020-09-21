const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/cm/shop/0商家后台.jpg',
        'cloud://hequn.6865-hequn-1302876179/cm/shop/0商家后台2.jpg',
        'cloud://hequn.6865-hequn-1302876179/cm/shop/1店铺管理.jpg',
        'cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-1上门试穿.jpg',
        'cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-1美容管理.jpg',
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-1超市生鲜.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-2添加商品-2美容养生.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-2添加商品-3上门试穿.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-2设置预约数量.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-3添加商品-商品分类-新增.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-3添加商品-商品分类.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-4规格-添加属性.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-4规格-添加规格.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/2-1-4规格.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/3-1-1订单管理-超市生鲜.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/3-1-2订单管理-美容养生-二维码.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/3-1-2订单管理-美容养生.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/4-1评价回复.jpg",
        "cloud://hequn.6865-hequn-1302876179/cm/shop/4-2评价回复-评论.jpg",        
        "cloud://hequn.6865-hequn-1302876179/cm/shop/5-1提现.jpg"
      ],
      descriptionList: [
        '一、商家端部分UI'
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/0-1首页.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/0-2分类.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/0-4购物车.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/1-2搜索.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/1-1选择小区.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/1-5-2提交订单.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/2-1商品详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/2-5支付成功.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/今日秒杀.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/分享海报.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/整箱团购.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/热卖排行榜.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/自提点.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/home/限时拼团.png'
      ],
      descriptionList: [
        '二、用户端首页模块UI：Banner、一级分类、秒杀、团购、拼团入口、首页商品列表展示、搜索',
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/heshenme/0-3-1喝什么.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/heshenme/0-3-2喝什么_详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/heshenme/0-3-3喝什么_用户.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/heshenme/0-3-4喝什么_帖子.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/heshenme/0-3-5发布帖子.jpg'
      ],
      descriptionList: [
        '三、喝什么模块UI'
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/0-1我的订单_骑手配送.png',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/2-1我的订单_订单详情_到店自提待付款.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/优惠券.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/优惠券使用.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/会员权益.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/会员权益_我的权益.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/会员码.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/地址管理.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/客服.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/开通会员.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/我的消息.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/我的订单_订单详情_骑手配送的待收货物流信息.png',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/立即评价.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/订单支付.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/领券中心.PNG',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/添加发票.PNG'
      ],
      descriptionList: [
        '四、个人中心页面模块部分UI'
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/0-1登录_验证码登录.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/0-2登录__验证码登录_验证码.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/0-3登录_密码登录.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/10提现.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/1接单.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/4接单-弹框.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/7线路规划.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/del/3待送达.jpg'
      ],
      descriptionList: [
        '五、配送单部分UI'
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
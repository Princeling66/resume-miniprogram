const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-0首页.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-1分类.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-2-0加急发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-2-1加急发布-选择地址.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-2-1加急发布-选择地址.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-2-2加急发布（弹框）.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/1-2-3加急发布-查看信息.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-0信息大厅.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-1信息详情-招工.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-2非会员查看.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-3支付.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-5选择优惠券.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-6信息详情-求租.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/home/2-7信息详情-评价.jpg'
      ],
      descriptionList: [
        '一、首页',
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/mhgv/info/3-0发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/info/3-1-1发布招工.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/info/3-2-2关键词.jpg'
      ],
      descriptionList: [
        '二、发布'
      ]
    },{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-0个人中心（个人）.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-1-0个人信息（个人）.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-2-0我的发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-2-2我的发布-详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/jiubuzui/user/会员权益.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-3-0已获取信息.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-4我的评价.jpg',
        'cloud://hequn.6865-hequn-1302876179/mhgv/user/5-12优惠券.jpg'
      ],
      descriptionList: [
        '三、个人中心页面模块部分UI'
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
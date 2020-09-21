const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/2.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/1-1首页入口.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/2-1参赛菜品.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/3-1企业资质.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/3-2发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/3-3发布分类.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/3-3发布-选择海报.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/3-4中奖名单.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/4-1详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/4-2分享.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/5-0我的.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/5-1我的发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/5-2评选结果.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/菜谱模块/5-3中奖记录.jpg',
      ],
      descriptionList: [
        '一、菜谱评选模块'
      ]
    }, {
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/首页.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/采摘垂钓.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/聊天_详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/绿色自营.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/结算.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/线路推介_线路推介.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/线路推介.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/游玩攻略.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/游玩攻略.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/民宿旺铺.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/旺铺.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/我的特色_农产品.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/我的特色.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/我的VR.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/商品详情_领取优惠券.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/商品详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/农庄电商旺铺.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/农庄民宿电商旺铺.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/农庄旺铺.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/农庄信息.jpg', '',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/共享农庄.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/app/旺铺/全部评论.jpg',
      ],
      descriptionList: [
        '二、首页、旺铺等模块部分UI',
      ]
    }, {
      imageUrlList: [
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/1-1首页入口.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/2-1参赛菜品.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/3-1企业资质.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/3-2发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/3-3发布-选择海报.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/3-3发布分类.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/3-3发布分类.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/4-1详情.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/4-2分享.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/5-0我的.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/5-1我的发布.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/5-2评选结果.jpg',
        'cloud://hequn.6865-hequn-1302876179/休闲游购/mini/5-3中奖记录.jpg',
      ],
      descriptionList: [
        '小程序部分UI，其余功能与APP相同'
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
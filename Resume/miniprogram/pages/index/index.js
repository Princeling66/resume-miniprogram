import util from '../../utils/util';
const app = getApp()
Page({

  data: {
    openid: '',
    animation: null,
    flag: true,
    entercolor: '',
    elements: [{
        title: '个人简介',
        name: 'intro',
        color: 'cyan',
        icon: 'gerenjianjieicon'
      },
      {
        title: '工作经历',
        name: 'company',
        color: 'blue',
        icon: 'gongzuojingyan1'
      },
      {
        title: '项目经验',
        name: 'project-list',
        color: 'purple',
        icon: 'xiangmujingyan1'
      },
      {
        title: '职业技能 ',
        name: 'skill',
        color: 'mauve',
        icon: 'jinengzu'
      }
    ]


  },
  nextpage(event) {
    const flag = event.currentTarget.dataset.flag
    const {
      entercolor
    } = this.data;
    if (flag === "true") {
      entercolor === 'entercolor'
    }
    this.opacityAnimate()


  },
  handletouchmove: function (A) {
    A.touches[0].pageX;
    this.opacityAnimate();
  },
  opacityAnimate: function (event) {
    let {
      animation
    } = this.data;
    animation = wx.createAnimation({
      duration: 1500,
      timingFunction: "ease-in-out",
      delay: 0,
      transformOrigin: "50% 50% 0%"
    })
    animation.translate(0, -1300).step(),
      this.setData({
        animationData: animation.export()
      });
  },
  onHide: function () {},
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  },
  onShow() {
      this.getOpenid();
  },
  // 获取用户openid
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openid)
        var openid = res.result.openid;
        that.setData({
          openid: openid
        });
        wx.setStorageSync('openid', this.data.openid);
        that.onQuery();
      }
    })
  },
  onQuery: function () {
    console.log(this.data.openid);
    const db = wx.cloud.database();
    db.collection('user').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        if (res.data.length > 0) {
          wx.setStorageSync('isLogin', true);
          wx.setStorageSync('openid', this.data.openid);
          console.log('[数据库] [查询记录] 成功: ', res.data)
        } else {
          wx.setStorageSync('isLogin', false);
        }
      },
      fail: err => {
        wx.setStorageSync('isLogin', false);
        console.log('[数据库] [查询记录] 失败：')
      }
    })
  },

  toPage(e) {
    let isLogin = wx.getStorageSync('isLogin');
    let url = e.currentTarget.dataset.url;
    if (!isLogin) {
      this.getOpenid();
      url = "../login/login"
    }
    wx.navigateTo({
      url: url,
    })
  },
  toUserList(){
    wx.navigateTo({
      url: "../user-list/user-list",
    })
  }

});
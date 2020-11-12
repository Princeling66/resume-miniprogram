//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database();
Page({
  data: {
    tab: -1,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    skin: app.globalData.skin,
    loading: true,
    animationTime: 1,
    userList: [],
    userPageList: [],
    page: 0,
    totalCount: 0, //数据总数
    loadProgress: 0,
    colourList: [{
      colour: 'bg-red'
    }, {
      colour: 'bg-orange'
    }, {
      colour: 'bg-yellow'
    }, {
      colour: 'bg-olive'
    }, {
      colour: 'bg-green'
    }, {
      colour: 'bg-cyan'
    }, {
      colour: 'bg-blue'
    }, {
      colour: 'bg-purple'
    }, {
      colour: 'bg-mauve'
    }, {
      colour: 'bg-pink'
    }, {
      colour: 'bg-lightBlue'
    }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.randomNum();
    this.getTotalCount();
  },
  loadProgress() {
    this.setData({
      loadProgress: this.data.loadProgress + 3
    })
    if (this.data.loadProgress < 100) {
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    } else {
      this.setData({
        loadProgress: 0
      })
    }
  },
  /**
   * 获取总数
   */
  getTotalCount() {
    let that = this;
    db.collection('user').count({
      success: function (res) {
        that.setData({
          totalCount: res.total
        });
        that.getUserListPage();
        that.loadProgress();
      }
    })
  },
  // 获取用户访问列表
  // getUserList() {
  //   db.collection('user').orderBy('createTime', 'desc').skip(0)
  //     .limit(10)
  //     .get({
  //       success: res => {
  //         this.setData({
  //           userList: res.data
  //         })
  //         this.getUserListPage();
  //       },
  //       fail: err => {
  //         console.log('[数据库] [查询记录] 失败：')
  //       }
  //     })
  // },
  getUserListPage: function () {
    let page = this.data.page;
    if (this.data.userList.length < this.data.totalCount) {
      db.collection('user').orderBy('createTime', 'desc').skip(page * 10)
        .limit(10)
        .get({
          success: res => {
            let userList = this.data.userList;
            for (let i = 0; i < res.data.length; i++) {
              userList.push(res.data[i]);
            }
            this.setData({
              userList: userList,
              page: page + 1
            });
            this.getUserListPage();
          },
          fail: err => {
            console.log('[数据库] [查询记录] 失败：');
          }
        })
    } else {
      this.setData({
        loadProgress: 0,
        userPageList: this.data.userList
      })
      // wx.showToast({
      //   title: '没有更多数据了',
      // })
    }

  },
  //获取随机数
  randomNum: function () {
    var num = Math.floor(Math.random() * 10);
    this.setData({
      randomNum: num
    });
  },

  prevent(event) {
    // console.log(event.currentTarget.dataset.url);
    var self = this;
    wx.setClipboardData({
      data: event.currentTarget.dataset.url,
    });

  },
  show(e) {
    let index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      tab: index
    })
  }
})
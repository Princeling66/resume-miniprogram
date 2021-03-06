//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
    projectList: [],
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
    this.getProjectList();
  },
  // 获取项目
  getProjectList() {
    console.log(111111);
    const db = wx.cloud.database();
    db.collection('project').where({}).get({
      success: res => {
        this.setData({
          projectList: res.data
        })
        this.setPicBase64();
      },
      fail: err => {
        console.log('[数据库] [查询记录] 失败：')
      }
    })
  },
  setPicBase64(){
    for (let i = 0; i < this.data.projectList.length; i++) {
      let pic = this.data.projectList[i].pic;
      let base64 = 'data:image/jpg;base64,' + wx.getFileSystemManager().readFileSync(pic, 'base64');
      this.setData({
        ['projectList[' + i + '].pic']: base64
      })

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
  // 跳转至项目详情
  toProject(e) {
    let id = Number(e.currentTarget.dataset.id);
    console.log(id)
    if (id == 0) {
      wx.navigateTo({
        url: '../project/project'
      })
    } else if (id == 9) {
      wx.previewImage({
        current: 'cloud://hequn.6865-hequn-1302876179/image/wx_blog.jpg',
        urls: ['cloud://hequn.6865-hequn-1302876179/image/wx_blog.jpg']
      })
    } else {
      let url = "";
      switch (id) {
        case 1:
          url = "../project-1/project-1";
          break;
        case 2:
          url = "../project-2/project-2";
          break;
        case 3:
          url = "../project-3/project-3";
          break;
        case 4:
          url = "../project-4/project-4";
          break;
        case 5:
          url = "../project-5/project-5";
          break;
        case 6:
          url = "../project-6/project-6";
          break;
        case 7:
          url = "../project-7/project-7";
          break;
        case 8:
          url = "../project-8/project-8";
          break;
      }
      wx.navigateTo({
        url: url
      })
    }
  }
})
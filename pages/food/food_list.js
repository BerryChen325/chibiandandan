// pages/canteen/food/food_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    foods: [],    // 本食堂的全部菜品（来自后端数据库）
    showFoods: [],  // 本食堂中符合当前口味的菜品
    tasteNav: [{id:1,label:'粤菜'},{id:2,label:'江浙菜'},{id:3,label:'川菜'},{id:4,label:'本帮菜'},{id:5,label:'甜品水饮'}],   // 口味：1粤菜，2江浙菜，3川菜，4本帮菜，5甜品水饮
    canteen: 0,
    curNav: 1
  },
  selectNav: function (event) {
    // console.log(event)
    var id = event.target.dataset.id
    var i = 0, j = 0
    var tempFoods = []
    for (i = 0; i < this.data.foods.length; ++i) {
      if (this.data.foods[i].ftaste == id) {
        tempFoods[j] = this.data.foods[i]
        ++j
      }
    }
    this.setData({
      curNav: id,
      showFoods: tempFoods
    })
    // var that = this;
    // var id = event.target.dataset.id
    // var xuesheng = [];
    // var t = 0;
    // var n = 0;
    // var p = 0;
    // var q = 0;
    // var idd = [];
    // var all = [];
    // var shitang = [];
    // console.log(id)
    // that.setData({
    //   curNav: id
    // })
    // wx.request({
    //   url: 'http://116.yaoyiwangluo.com/wx_fenlei_chanpin.asp',
    //   data: {
    //     int_lxid1: id
    //   },
    //   success: function (res) {
    //     for (t = 0; t < res.data.length; t++) {
    //       idd[n] = res.data[t].cp_id;
    //       all[n] = res.data[t];
    //       n++;
    //     }
    //     for (p = 0; p < idd.length; p++) {
    //       (function (p) {
    //         wx.request({
    //           url: 'http://116.yaoyiwangluo.com/wx_sp_info-b.asp',
    //           data: {
    //             cp_id: idd[p]
    //           },
    //           success: function (res) {
    //             console.log(res.data)
    //             if (res.data == "教工食堂") {
    //               xuesheng[q] = all[p];
    //               q++;
    //             }
    //             console.log(q)
    //             console.log(p)
    //             console.log(xuesheng)
    //             that.setData({
    //               foods: xuesheng
    //             })
    //           }
    //         })
    //       })(p)
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 保存食堂名称
    that.setData({
      canteen: options.canteen  // 1旦苑，2北食，3南苑，4南小食，5南食
    })
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth
        })
      },
    })

    wx.request({
      url: 'http://mysite.io/stuInfo/dishList/wxdish.php',
      data: {
        waddress: this.data.canteen
      },
      success: function (res) {
        console.log(res)
        that.setData({
          foods: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
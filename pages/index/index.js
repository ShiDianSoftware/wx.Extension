//index.js
//获取应用实例
var print = require('../FrameWorks/Extension/Extension.js')


var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    print(this)


  }
})

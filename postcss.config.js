module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth: 375, //视图宽度 ，对应设计时的宽度
      viewportHeight: 667, //视图高度，对应的设计时的高度
      minPixelValue: 1,//最小像素不转换
      unitPrecision: 5, // 指定的转换的最小视图单位的小数位数
      viewport:'vw', //转换视图单位，vw或rem
      selectorBlackList: ['TabBar','MainTabBar'], // 指定文件不进行像素转换
      mediaQuery:false,
    }
  }
}

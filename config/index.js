const path = require('path');

const config = {
  projectName: 'taro3-vant-demo',
  date: '2021-3-23',
  // designWidth: 750,
  // deviceRatio: {
  //   640: 2.34 / 2,
  //   750: 1,
  //   828: 1.81 / 2,
  // },
  designWidth: 375,
  deviceRatio: {
    320: 2.34 / 2,
    375: 1,
    414: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  alias: {
    '@vant/weapp': path.resolve(__dirname, '../src/native-components/vant-weapp/dist'),
    '@/assets': path.resolve(__dirname, '../src/assets'),
    '@/components': path.resolve(__dirname, '../src/components'),
  },
  copy: {
    patterns: [
      {
        from: 'src/native-components/vant-weapp/dist/wxs',
        to: 'dist/native-components/vant-weapp/dist/wxs',
      },
      {
        from: 'src/native-components/vant-weapp/dist/common/style',
        to: 'dist/native-components/vant-weapp/dist/common/style',
      },
      {
        from: 'src/native-components/vant-weapp/dist/common/index.wxss',
        to: 'dist/native-components/vant-weapp/dist/common/index.wxss',
      },
      // button
      {
        from: 'src/native-components/vant-weapp/dist/button/index.wxs',
        to: 'dist/native-components/vant-weapp/dist/button/index.wxs',
      },
      // icon
      {
        from: 'src/native-components/vant-weapp/dist/icon/index.wxs',
        to: 'dist/native-components/vant-weapp/dist/icon/index.wxs',
      },
      // loading
      {
        from: 'src/native-components/vant-weapp/dist/loading/index.wxs',
        to: 'dist/native-components/vant-weapp/dist/loading/index.wxs',
      },
      // tabs
      {
        from: 'src/native-components/vant-weapp/dist/tabs/index.wxs',
        to: 'dist/native-components/vant-weapp/dist/tabs/index.wxs',
      },
      // sticky
      {
        from: 'src/native-components/vant-weapp/dist/sticky/index.wxs',
        to: 'dist/native-components/vant-weapp/dist/sticky/index.wxs',
      },
    ],
    options: {},
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};

const path = require('path');
const webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, '../src'); // __dirname 中的src目录，以此类推
var COMPONENT_PATH = path.resolve(ROOT_PATH, '../../src'); // __dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'index.js'); // 根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '../dist/assets/'); // 发布文件所存放的目录

module.exports = {
  entry: APP_FILE,
  output: {
    path: BUILD_PATH,
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    // “path”仅仅告诉Webpack结果存储在哪里
    filename: 'bundle.js',
    publicPath: "assets/",
    //模板、样式、脚本、图片等资源对应的server上的路径
    // “publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
            plugins: (loader) => [
              require('autoprefixer')(),
              // require('cssnano')()
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')(),
                // require('cssnano')()
              ]
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
        loader: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=1200&name=[hash].[ext]'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production') //定义编译环境
      }
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    alias: {
      "@": APP_PATH,
      "component_src": COMPONENT_PATH
    }
  }
}

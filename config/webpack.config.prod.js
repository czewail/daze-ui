const path = require('path')
const autoprefixer = require('autoprefixer')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, '../src') // __dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'index.js') // 根目录文件app.jsx地址
const BUILD_PATH = path.resolve(ROOT_PATH, '../dist') // 发布文件所存放的目录

module.exports = {
  mode: 'production',
  entry: APP_FILE,
  output: {
    path: BUILD_PATH,
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    // “path”仅仅告诉Webpack结果存储在哪里
    filename: 'index.js',
    // 模板、样式、脚本、图片等资源对应的server上的路径
    // “publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:8]',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                }),
                // require('cssnano')()
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:8]',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                }),
                // require('cssnano')()
              ],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
        loader: 'file-loader?name=[hash].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=1200&name=[hash].[ext]',
      },
    ],
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], // 后缀名自动补全
    alias: {
      '@': APP_PATH,
    },
  },
}
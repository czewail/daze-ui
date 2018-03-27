const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const pkgPath = path.join(path.resolve(__dirname, '../../'), 'package.json')

const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}

const CONFIG_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(CONFIG_PATH, '../src') // __dirname 中的src目录，以此类推
const COMPONENT_PATH = path.resolve(CONFIG_PATH, '../../src') // __dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'index.js') // 根目录文件app.jsx地址
const BUILD_PATH = path.resolve(CONFIG_PATH, 'build') // 发布文件所存放的目录

let theme = {}
if (pkg.theme && typeof (pkg.theme) === 'string') {
  let cfgPath = pkg.theme
  // relative path
  if (cfgPath.charAt(0) === '.') {
    cfgPath = path.resolve('../../', cfgPath)
  }
  const getThemeConfig = require(cfgPath)
  theme = getThemeConfig()
} else if (pkg.theme && typeof (pkg.theme) === 'object') {
  /* eslint prefer-destructuring: 0 */
  theme = pkg.theme
}

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    // 这里reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。
    APP_FILE,
  ],
  output: {
    path: BUILD_PATH,
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    // “path”仅仅告诉Webpack结果存储在哪里
    filename: 'bundle.js',
    publicPath: '/assets/',
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
          'css-loader?sourceMap',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
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
          'css-loader?sourceMap',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                }),
                // require('cssnano')()
              ],
            },
          },
          `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
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
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'), // 定义编译环境
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], // 后缀名自动补全
    alias: {
      '@': APP_PATH,
      '~components': COMPONENT_PATH,
    },
  },
}

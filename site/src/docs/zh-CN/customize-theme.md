# 定制主题

支持一定程度的样式定制, 以满足业务和品牌上多样化的视觉需求

## 变量
样式使用Less作为开发语言, 并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

## 定制方式
使用 `package.json` 的 `theme` 字段或者使用less文件方式来定制主题

### 使用 package.json
配置在 package.json 下的 theme 字段。theme 可以配置为一个对象或文件路径。
```txt
  "theme": {
    "primary-color": "#1DA57A",
  },
```
或者路径
```txt
  "theme": "./theme.js",
```
### 使用less
用 less 文件进行变量覆盖
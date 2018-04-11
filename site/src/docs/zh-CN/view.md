## View 视图
视图预置了一些常用属性来定义组件或子组件的视觉效果

设置noTag属性后，View视图不会生成新的标签，而是会将View组件的样式应用到子组件

### 使用
#### 背景色
:::demo
```js
render() {
  return (
    <View noTag bgColor="complete">
      <div style={{marginBottom: 10}}>
        <WhiteSpace size={50}></WhiteSpace>
      </div>
      <div>
        <WhiteSpace size={100}></WhiteSpace>
      </div>
    </View>
  )
}
```
:::

#### 字体色

:::demo
```js
render() {
  return (
    <View noTag bgColor="warning" color="danger">
      <div style={{lineHeight: '30px'}}>
        <SideSpace size={50}>我是一条文本</SideSpace>
      </div>
    </View>
  )
}
```
:::


### View 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 字体颜色, 主题颜色中的颜色类型或者16进制颜色 | string | — | - |
| bgColor | 背景颜色, 主题颜色中的颜色类型或者16进制颜色 | string | — | — |
| tag | View生成的新标签 | string | — | div |
| noTag | View不再生成新标签，而是将样式应用到所有子组件 | boolean | — | false |

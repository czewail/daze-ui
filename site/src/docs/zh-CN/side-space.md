## SideSpace 两侧留白
空内容的自定义高度div

### 基本使用
:::demo
使用 SideSpace 组件创建一个两侧padding缩进的div
```js
render() {
  return (
    <div>
      <SideSpace size={30}>
        <p>我是第1个p标签</p>
      </SideSpace>
      <SideSpace size={50}>
        <p>我是第2个p标签</p>
      </SideSpace>
      <SideSpace size={100}>
        <p>我是第3个p标签</p>
      </SideSpace>
    </div>
  )
}
```
:::


### WhiteSpace 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 留白大小 | number/string | number类型时，默认单位px | 20 |
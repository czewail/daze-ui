## WhiteSpace 上下留白
空内容的自定义高度div

### 基本使用
:::demo
使用 WhiteSpace 组件创建一个空内容的自定义高度div
```js
render() {
  return (<div>
    <p>我是第一个p标签</p>
    <WhiteSpace size={30}/>
    <p>我是第二个p标签</p>
    <WhiteSpace size={100}/>
    <p>我是第三个p标签</p>
  </div>)
}
```
:::


### WhiteSpace 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 留白大小 | number/string | number类型时，默认单位px | 20 |
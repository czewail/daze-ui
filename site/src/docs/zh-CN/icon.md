## Icon 图标

提供了一套常用的图标集合

---

### 基本使用

直接通过设置类名或者 `Icon` 组件来使用即可。例如：

:::demo
```js
render() {
  const iconStyle = {
    fontSize: '25px',
    marginRight: '30px',
  }
  return (
    <div>
      <i className="fa fa-home" style={iconStyle}></i>
      <Icon name='home' style={iconStyle}/>
      <Icon name='home' color='complete' style={iconStyle}/>
      <Icon name='home' color='#ff9900' style={iconStyle}/>
      <Icon tag='span' name='home' size={25}/>
    </div>
  )
}
```
:::

### 属性

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name      | 名称  | string   |  —           |    —     |
| size      | 大小  | number   |  —           |    14    |
| color      | 颜色  | string   |  内置的 primary, success, complete, warning, danger, info 以及 其他自定义颜色, 如：'#0099ff'   |   info     |
| className      | 附加样式名  | string   |  —           |    —     |
| rotated      | 旋转动画  | string   |  'spin', 'pulse'          |    —     |
| prefix      | 自定义前缀  | string   |  当引入了其他图标库即可使用 , Font-Awesome 也可以写成: `<Icon name='home' prefix='fa' className='fa'/>`   |   —     |
| tag      | 自定义标签  | string   |  —           |    i     |


### 内置图标

内置了完整的 [Font Awesome 4.7.0](http://fontawesome.io/) 图标

:::demo
```js
render() {

  return (
      <div>
      {
        Object.keys(this.props.icons).map((group, index) => {
          return (
            <div key={index}>
              <h5 className='m-t-20'>{group}</h5>
              <ul className="demo-icons-list">
                {
                  this.props.icons[group].map((icon, key) => {
                    return <li key={key}><span><Icon name={icon}/>{icon}</span></li>
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}
```
:::

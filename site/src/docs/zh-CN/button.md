## Button 按钮

### 默认按钮
:::demo
```js
render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <Button style={buttonStyle}>Default</Button>
      <Button type='primary' style={buttonStyle}>Primary</Button>
      <Button type='success' style={buttonStyle}>Success</Button>
      <Button type='complete' style={buttonStyle}>Complete</Button>
      <Button type='warning' style={buttonStyle}>Warning</Button>
      <Button type='danger' style={buttonStyle}>Danger</Button>
      <Button type='info' style={buttonStyle}>Info</Button>
    </div>
  )
}
```
:::

### 基础按钮
:::demo
```js
render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <Button basic style={buttonStyle}>Default</Button>
      <Button basic type='primary' style={buttonStyle}>Primary</Button>
      <Button basic type='success' style={buttonStyle}>Success</Button>
      <Button basic type='complete' style={buttonStyle}>Complete</Button>
      <Button basic type='warning' style={buttonStyle}>Warning</Button>
      <Button basic type='danger' style={buttonStyle}>Danger</Button>
      <Button basic type='info' style={buttonStyle}>Info</Button>
    </div>
  )
}
```
:::


### 按钮尺寸

根据页面UI选用不同尺寸的按钮

:::demo
```js
render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <div className='m-b-20'>
        <Button type="complete" size="large" style={buttonStyle}>Large</Button>
        <Button type="complete" style={buttonStyle}>Default</Button>
        <Button type="complete" size="small" style={buttonStyle}>Small</Button>
        <Button type="complete" size="tiny" style={buttonStyle}>Tiny</Button>
      </div>
      <div>
        <Button basic type="complete" size="large" style={buttonStyle}>Large</Button>
        <Button basic type="complete" style={buttonStyle}>Default</Button>
        <Button basic type="complete" size="small" style={buttonStyle}>Small</Button>
        <Button basic type="complete" size="tiny" style={buttonStyle}>Tiny</Button>
      </div>
    </div>
  )
}
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)

:::demo
按钮支持使用`icon`和`iconRight`直接定义图标和图标位置，也可以自定义子组件使用图标
```js
render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <div className='m-b-20'>
        <Button type="complete" icon="search" style={buttonStyle}>搜索</Button>
        <Button type="complete" icon="cog" iconRight={true} style={buttonStyle}>设置</Button>
        <Button type="complete" icon="send" style={buttonStyle}/>
        <Button type="complete" icon="wechat" style={buttonStyle}/>
        <Button type="complete" icon="share-alt" style={buttonStyle}/>
        <Button type="complete" style={buttonStyle}><Icon name='share-alt'/> 分享</Button>
      </div>
      <div>
        <Button basic type="complete" icon="search" style={buttonStyle}>搜索</Button>
        <Button basic type="complete" icon="cog" iconRight={true} style={buttonStyle}>设置</Button>
        <Button basic type="complete" icon="send" style={buttonStyle}/>
        <Button basic type="complete" icon="wechat" style={buttonStyle}/>
        <Button basic type="complete" icon="share-alt" style={buttonStyle}/>
        <Button basic type="complete" style={buttonStyle}><Icon name='share-alt'/> 分享</Button>
      </div>
    </div>
  )
}
```
:::

### 禁用状态
:::demo
```js
render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <Button disabled type="complete"  style={buttonStyle}>Disabled</Button>
      <Button disabled basic type="complete" style={buttonStyle}>Disabled</Button>
    </div>
  )
}
```
:::



### 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态

:::demo
```js
constructor(props) {
  super(props)
  this.state = {
    loadingStatus: false,
    loadingStatus2: false,
    loadingStatus3: false,
  }
}

_handleLoading = () => {
  this.setState({
    loadingStatus: true
  })

  setTimeout(() => {
    this.setState({
      loadingStatus: false
    })
  }, 3000)
}

_handleLoading2 = () => {
  this.setState({
    loadingStatus2: true
  })

  setTimeout(() => {
    this.setState({
      loadingStatus2: false
    })
  }, 3000)
}

_handleLoading3 = () => {
  this.setState({
    loadingStatus3: true
  })

  setTimeout(() => {
    this.setState({
      loadingStatus3: false
    })
  }, 3000)
}

render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <div>
        <Button type="complete" onClick={this._handleLoading} loading={this.state.loadingStatus} style={buttonStyle}>点我加载</Button>
        <Button type="complete" loading={true} style={buttonStyle}>加载中</Button>
        <Button type="complete" onClick={this._handleLoading2} loading={this.state.loadingStatus2} icon='upload' style={buttonStyle}>点我上传</Button>
        <Button basic type="complete" onClick={this._handleLoading3} loading={this.state.loadingStatus3} icon='download' iconRight={true} style={buttonStyle}>点我下载</Button>
      </div>
    </div>
  )
}
```
:::

### 圆角与圆形

:::demo
```js
render() {
  const buttonStyle = {
    marginRight: '20px',
  }
  return (
    <div>
      <div className='m-b-20'>
        <Button type="complete" rounded={true} icon="search" style={buttonStyle}>搜索</Button>
        <Button type="complete" size='small' rounded={true} icon="cog" iconRight={true} style={buttonStyle}>设置</Button>
        <Button type="complete" size='tiny' rounded={true} style={buttonStyle}><Icon name='share-alt'/> 分享</Button>
        <Button type="complete" rounded={true} icon="wechat" style={buttonStyle}/>
        <Button type="complete" circle={true} icon="share-alt" style={buttonStyle}/>
        <Button type="complete" size='small' circle={true}  icon="send" style={buttonStyle}/>
      </div>
      <div>
        <Button basic type="complete" rounded={true} icon="search" style={buttonStyle}>搜索</Button>
        <Button basic type="complete" size='small' rounded={true} icon="cog" iconRight={true} style={buttonStyle}>设置</Button>
        <Button basic type="complete" size='tiny' rounded={true} style={buttonStyle}><Icon name='share-alt'/> 分享</Button>
        <Button basic type="complete" rounded={true} icon="wechat" style={buttonStyle}/>
        <Button basic type="complete" circle={true} icon="share-alt" style={buttonStyle}/>
        <Button basic type="complete" size='small' circle={true}  icon="send" style={buttonStyle}/>
      </div>
    </div>
  )
}
```
:::

### 按钮组
:::demo
```js
render() {
  const buttonGroupStyle = {
    marginRight: '20px'
  }
  return (
    <div>
      <div>
        <Button.Group style={buttonGroupStyle}>
          <Button icon='angle-left' type="complete">上一页</Button>
          <Button icon='angle-right' iconRight type="complete">下一页</Button>
        </Button.Group>
        <Button.Group style={buttonGroupStyle}>
          <Button type="complete" icon='save'/>
          <Button type="complete" icon='edit'/>
          <Button type="complete" icon='trash'/>
        </Button.Group>
        <Button.Group style={buttonGroupStyle}>
          <Button icon='save'/>
          <Button icon='edit'/>
          <Button icon='trash'/>
        </Button.Group>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button.Group style={buttonGroupStyle}>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
        <Button.Group size='small' style={buttonGroupStyle}>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>
    </div>

  )
}
```
:::

### 块级按钮

:::demo
```js
render() {
  return (
    <div>
      <Button type='complete' block={true}>块级按钮</Button>
      <Button type='complete' icon='menu' block={true}>图标块级按钮</Button>
      <Button type='success' block={true}><span style={{marginRight: 10}}><Icon name='wechat'/></span>微信登陆</Button>
      <Button type='warning' block={true}>微博登陆<span style={{marginLeft: 10}}><Icon name='weibo'/></span></Button>
      <Button type='info' block={true}><span style={{float: 'left'}}><Icon name='github'/></span>Github登陆</Button>
      <Button type='complete' block={true}><span style={{float: 'right'}}><Icon name='facebook'/></span>Facebook登陆</Button>
    </div>
  )
}
```
:::


### Button 属性
| 参数      | 说明               | 类型    | 可选值                                                     | 默认值  |
|:----------|:-------------------|:--------|:-----------------------------------------------------------|:--------|
| size      | 尺寸               | string  | large, default, small, tiny                                | default |
| type      | 类型               | string  | primary, success, complete, warning, danger, info, default | default |
| disabled  | 禁用               | boolean | true, false                                                | false   |
| htmlType  | 原生 type 属性     | string  | button, submit, reset                                      | button  |
| icon      | 图标名称           | string  | -                                                          | -       |
| iconRight | 图标是否在文字右边 | boolean | -                                                          | false   |
| loading   | 加载状态           | boolean | -                                                          | false   |
| rounded   | 圆角               | boolean | -                                                          | false   |
| circle    | 圆形               | boolean | -                                                          | false   |
| block     | 是否块状按钮       | boolean | -                                                          | false   |

### Button.Group 属性
| 参数 | 说明 | 类型   | 可选值                      | 默认值  |
|:-----|:-----|:-------|:----------------------------|:--------|
| size | 尺寸 | string | large, default, small, tiny | default |

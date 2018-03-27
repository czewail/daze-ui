## SwitchIOS 开关

IOS7 样式的开关

---

### 基本使用

:::demo
```js
constructor() {
  super()
  this.state = {
    isChecked: true
  }
}
render() {
  return (
    <div>
      <Row>
        <Col span='12'>
          <SwitchIOS defaultChecked={true} onChange={checked => console.log(checked)}/>
        </Col>
        <Col span='12'>
          <SwitchIOS onClick={() => {
            this.setState({ isChecked: !this.state.isChecked })
          }} checked={this.state.isChecked} onChange={checked => console.log(checked)}/>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 开关类型

:::demo
```js
render() {
  return (
    <div>
      <Row>
        <Col span='4'>
          <SwitchIOS defaultChecked type='complete'/>
        </Col>
        <Col span='4'>
          <SwitchIOS defaultChecked type='success'/>
        </Col>
        <Col span='4'>
          <SwitchIOS defaultChecked type='primary'/>
        </Col>
        <Col span='4'>
          <SwitchIOS defaultChecked type='danger'/>
        </Col>
        <Col span='4'>
          <SwitchIOS defaultChecked type='warning'/>
        </Col>
        <Col span='4'>
          <SwitchIOS defaultChecked type='info'/>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 开关大小

:::demo
```js
render() {
  return (
    <div>
      <Row>
        <Col span='4'>
          <SwitchIOS size='tiny' defaultChecked/>
        </Col>
        <Col span='4'>
          <SwitchIOS size='small' defaultChecked/>
        </Col>
        <Col span='4'>
          <SwitchIOS defaultChecked/>
        </Col>
        <Col span='4'>
          <SwitchIOS size='large' defaultChecked/>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 可用状态

:::demo
```js
render() {
  return (
    <div>
      <Row>
        <Col span='4'>
          <SwitchIOS defaultChecked disabled/>
        </Col>
        <Col span='4'>
          <SwitchIOS disabled/>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### SwitchIOS 属性

| 参数           | 说明                                | 类型     | 可选值                                            | 默认值  |
|:---------------|:------------------------------------|:---------|:--------------------------------------------------|:--------|
| size           | 大小                                | string   | large, small, tiny                                | -       |
| type           | 类型                                | string   | primary, success, complete, warning, danger, info | success |
| className      | 附加样式名                          | string   | —                                                 | —       |
| checked        | 是否选中                            | boolean  | -                                                 | false   |
| disabled       | 是否可用                            | boolean  | -                                                 | false   |
| handleOnChange | 开关事件函数，参数checked为是否开启 | function | —                                                 | -       |

## Switch 开关

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
          <Switch defaultChecked={true} onChange={checked => console.log(checked)}/>
        </Col>
        <Col span='12'>
          <Switch onClick={() => {
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
          <Switch defaultChecked type='complete'/>
        </Col>
        <Col span='4'>
          <Switch defaultChecked type='success'/>
        </Col>
        <Col span='4'>
          <Switch defaultChecked type='primary'/>
        </Col>
        <Col span='4'>
          <Switch defaultChecked type='danger'/>
        </Col>
        <Col span='4'>
          <Switch defaultChecked type='warning'/>
        </Col>
        <Col span='4'>
          <Switch defaultChecked type='info'/>
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
          <Switch size='tiny' defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch size='small' defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch size='large' defaultChecked/>
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
          <Switch defaultChecked disabled/>
        </Col>
        <Col span='4'>
          <Switch disabled/>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 文字和图标

:::demo
```js
render() {
  return (
    <div>
      <Row>
        <Col span='4'>
          <Switch size='tiny' checkedItem='开' uncheckedItem='关' defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch size='small' checkedItem='开' uncheckedItem='关' defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch checkedItem='开' uncheckedItem='关' defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch size='large' checkedItem='开' uncheckedItem='关' defaultChecked/>
        </Col>
      </Row>
      <Row>
        <Col span='4'>
          <Switch checkedItem={(
            <Icon name='check'/>
          )} uncheckedItem={(
            <Icon name='close'/>
          )} defaultChecked/>
        </Col>
        <Col span='4'>
          <Switch checkedItem={1} uncheckedItem={0} defaultChecked/>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### Switch 属性

| 参数           | 说明                                | 类型     | 可选值                                            | 默认值  |
|:---------------|:------------------------------------|:---------|:--------------------------------------------------|:--------|
| size           | 大小                                | string   | large, small, tiny                                | -       |
| type           | 类型                                | string   | primary, success, complete, warning, danger, info | success |
| className      | 附加样式名                          | string   | —                                                 | —       |
| checked        | 是否选中, 受控属性                            | boolean  | -                                                 | false   |
| defaultChecked        | 是否默认选中                            | boolean  | -                                                 | false   |
| disabled       | 是否可用                            | boolean  | -                                                 | false   |
| checkedItem    | 开关打开时显示内容                  | -        | -                                                 | -       |
| uncheckedItem  | 开关关闭时显示内容                  | -        | -                                                 | -       |
| onChange | 开关事件函数 | function | function(checked, event) { /**/ }     | -       |

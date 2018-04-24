## Grid 栅格

24 栅格系统

---

### 基础布局

:::demo
使用 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有 Col 必须放在 Row 内
```js
render() {
  return (
    <div>
      <Row className='m-b-10'>
        <Col span={12}>
          <div className='demo-grid-content daze-bg-primary'>col-12</div>
        </Col>
        <Col span={12}>
          <div className='demo-grid-content daze-bg-primary-light'>col-12</div>
        </Col>
      </Row>
      <Row className='m-b-10'>
        <Col span={8}>
            <div className='demo-grid-content daze-bg-primary'>col-8</div>
        </Col>
        <Col span={8}>
          <div className='demo-grid-content daze-bg-primary-light'>col-8</div>
        </Col>
        <Col span={8}>
          <div className='demo-grid-content daze-bg-primary'>col-8</div>
        </Col>
      </Row>
      <Row className='m-b-10'>
        <Col span={6}>
          <div className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
        <Col span={6}>
          <div className='demo-grid-content daze-bg-primary-light'>col-6</div>
        </Col>
        <Col span={6}>
          <div className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
        <Col span={6}>
          <div className='demo-grid-content daze-bg-primary-light'>col-6</div>
        </Col>
      </Row>
      <Row className='m-b-10'>
        <Col span={4}>
          <div className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 分栏间隔
:::demo
Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0
```js
render() {
  return (
    <div>
      <Row gutter={24}>
        <Col span={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
        <Col span={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
        <Col span={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
        <Col span={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 左右偏移

:::demo
```js
render() {
  return (
    <div>
      <Row className='m-b-10'>
        <Col span={12} offset={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-12</div>
        </Col>
      </Row>
      <Row className='m-b-10'>
        <Col span={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
        <Col span={6} offset={12}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-8</div>
        </Col>
        <Col span={6} offset={6}>
          <div  className='demo-grid-content daze-bg-primary'>col-6</div>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### Flex 布局

:::demo
```js
render() {
  return (
    <div>
      <Row className='m-b-10' type='flex' justify='start'>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
      </Row>
      <Row className='m-b-10' type='flex' justify='center'>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
      </Row>
      <Row className='m-b-10' type='flex' justify='end'>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
      </Row>
      <Row className='m-b-10' type='flex' justify='space-between'>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
      </Row>
      <Row className='m-b-10' type='flex' justify='space-around'>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary-light'>col-4</div>
        </Col>
        <Col span={4}>
          <div  className='demo-grid-content daze-bg-primary'>col-4</div>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### Flex 对齐

:::demo
```js
render() {
  return (
    <div>
      <Row className='m-b-10' type='flex' align='top'>
        <Col span={8}>
          <div className='demo-grid-content daze-bg-primary height-50'>col-8</div>
        </Col>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary-light height-75'>col-8</div>
        </Col>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary height-100'>col-8</div>
        </Col>
      </Row>
      <Row className='m-b-10' type='flex' align='middle'>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary height-100'>col-8</div>
        </Col>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary-light height-75'>col-8</div>
        </Col>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary height-50'>col-8</div>
        </Col>
      </Row>
      <Row className='m-b-10' type='flex' align='bottom'>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary height-50'>col-8</div>
        </Col>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary-light height-75'>col-8</div>
        </Col>
        <Col span={8}>
          <div  className='demo-grid-content daze-bg-primary height-100'>col-8</div>
        </Col>
      </Row>
    </div>
  )
}
```
:::

### 响应式布局

:::demo
```js
render() {
  return (
    <div>
      <Row className='m-b-10'>
        <Col xs="8" sm="6" md="4" lg="3">
          <div className='demo-grid-content daze-bg-primary'>col</div>
        </Col>
        <Col xs="4" sm="6" md="8" lg="9">
          <div  className='demo-grid-content daze-bg-primary-light'>col</div>
        </Col>
        <Col xs="4" sm="6" md="8" lg="9">
          <div className='demo-grid-content daze-bg-primary'>col</div>
        </Col>
        <Col xs="8" sm="6" md="4" lg="3">
          <div className='demo-grid-content daze-bg-primary-light'>col</div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='demo-grid-content daze-bg-primary'>Col</Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className='demo-grid-content daze-bg-primary-light'>Col</Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='demo-grid-content daze-bg-primary'>Col</Col>
      </Row>
    </div>
  )
}
```
:::

### Row 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start, end, center, space-around, space-between | start |
| align | flex 布局下的垂直排列方式 | string | top, middle, bottom | top |

### Col 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |

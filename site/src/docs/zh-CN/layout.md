# Layout 布局


:::demo
```js
render() {
  const { SubMenu } = Menu
  return (
    <div>
      <Layout>
        <Layout.Header>
          <Menu>
          </Menu>
        </Layout.Header>
        <Layout.SubLayout>
          <Layout.Sider>
            <Menu>
              <SubMenu>x</SubMenu>
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            <SideSpace size={50}>
              <WhiteSpace style={{
                backgroundColor: 'white'
              }} size={250}/>
            </SideSpace>
          </Layout.Content>
        </Layout.SubLayout>
      </Layout>
    </div>
  )
}
```
:::
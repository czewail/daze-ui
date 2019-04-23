# Layout 布局


:::demo
```js
constructor() {
  super()
  this.state = {
    mode: 'horizontal'
  }
}
changeMode(checked) {
  this.setState({
    mode: checked ? 'vertical' : 'horizontal'
  }, () => {
    // console.log(this.state.mode, '点击修改')
  })
}
render() {
  const { SubMenu, Item: MenuItem } = Menu
  return (
    <div>
      <Layout>
        <Layout.Header>
          <Menu>
          </Menu>
        </Layout.Header>
        <Layout.SubLayout>
          <Layout.Sider>
            <Menu defaultOpenKeys={[]} mode={this.state.mode} theme="dark">
              <SubMenu icon="th-large" title="菜单1" index="1">
                <MenuItem>菜单1-1</MenuItem>  
                <SubMenu title="菜单1-2" index="2">
                  <MenuItem>菜单1-2-1</MenuItem> 
                  <SubMenu title="菜单1-2-2" index="3">
                    <MenuItem>菜单1-2-2-1</MenuItem>  
                  </SubMenu> 
                </SubMenu>
              </SubMenu>
              <MenuItem icon="home">菜单2</MenuItem>
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            <SideSpace size={50}>
              <WhiteSpace style={{
                backgroundColor: 'white'
              }} size={250}/>
              <SwitchIOS onChange={this.changeMode.bind(this)}>点击</SwitchIOS>
            </SideSpace>
          </Layout.Content>
        </Layout.SubLayout>
      </Layout>
    </div>
  )
}
```
:::
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
              <SubMenu icon="th-large" title="用户管理用户管理" index="1">
                <MenuItem>用户列表用户列表</MenuItem>  
                <SubMenu title="用户管理用户管理2" index="2">
                  <MenuItem>用户列表2用户列表2</MenuItem> 
                  <SubMenu title="用户管理用户管理3" index="3">
                    <MenuItem>用户列表3用户列表3</MenuItem>  
                  </SubMenu> 
                </SubMenu>
              </SubMenu>
              <MenuItem icon="home">用户列表用户列表</MenuItem>
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
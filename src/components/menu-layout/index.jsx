import React from 'react'
import { Layout, Menu, Breadcrumb, Button, Modal } from 'antd'
import { withRouter } from 'react-router-dom'
import { SketchPicker } from 'react-color'
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons'
import { menus } from './menu'
import Logo from './img/logo.gif'

const { SubMenu } = Menu;
const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;

class MenuLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menus,
      collapsed: false,
      selectedKeys: [],
      pageHeads: [],
      openKeys: [],
      colorSelectModal: false,
      themeColor: null
    }
  }
  componentWillMount() {
    this.setSelectedKeys(this.props);
  }
  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
    this.setSelectedKeys(nextProps);
  }

  setSelectedKeys = (props) => {
    const { menus } = this.state
    let pathName = props.location.pathname
    let selectedKeys = []
    let pageHeads = []
    let openKeys = []
    menus.map((item, index) => {
      if(item.path === pathName) {
        selectedKeys.push(`${index}`)
        pageHeads.push(item.name)
      } else if (item.children && Array.isArray(item.children)) {
        item.children.map((childItem, childrenIndex) => {
          if(childItem.path === pathName) {
            selectedKeys.push(`${index}-${childrenIndex}`)
            pageHeads.push(item.name, childItem.name)
            openKeys.push(`${index}`)
          }
        })
      }
    })
    this.setState({
     selectedKeys,
      pageHeads,
      openKeys
    })
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    const { menus, selectedKeys, pageHeads, openKeys, collapsed, color } = this.state
    return(
      <Layout style={{ height: '100vh', display: 'flex' }} theme={color}>
        <Sider theme={color} collapsible collapsed={collapsed} onCollapse={this.toggleCollapsed}>
          <div
            className="logo"
            style={{
              height: 70, width: 70, borderRadius: 50,
              color: '#FFF',
              // lineHeight: '100px',
              margin: '10px auto',
              background: 'linear-gradient(315deg,#fff 0,#cfeddc 100%'
            }}
          >
            <img
              style={{ height: 70, width: 70, borderRadius: 50}}
              alt={'logo'}
              src={Logo}
            />
          </div>
          <Menu
            defaultOpenKeys={openKeys}
            selectedKeys={ selectedKeys }
            theme="dark"
            mode="inline"
          >
            {
              menus.map((item, index) => {
                return (
                  item.children
                    ? <SubMenu
                        key={index}
                        title={
                          <span>
                              <HeartTwoTone twoToneColor="#eb2f96" />
                              <span>{ item.name }</span>
                            </span>
                        }

                      >
                        {
                          item.children && this.renderChildrenMenu(item, index)
                        }
                      </SubMenu>
                    : <Menu.Item onClick={ () => this.jumpPath(item.path) }  key={index}>
                        <HeartTwoTone twoToneColor="#eb2f96" />
                        <span className="nav-text">{ item.name }</span>
                      </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{display: 'flex'}}>
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#FFF', textAlign: 'left' }} >
            {/*<Button type="link" ghost onClick={this.colorSelectModal} style={{ marginBottom: 16 }}>*/}
            {/*  {*/}
            {/*    collapsed*/}
            {/*      ? <RightCircleTwoTone twoToneColor="#eb2f96" />*/}
            {/*      : <LeftCircleTwoTone twoToneColor="#eb2f96" />*/}
            {/*  }*/}
            {/*</Button>*/}
          </Header>
          <Content
            style={{
              padding: 24,
              flex: 1,
              overflow: 'auto'
            }}
          >
            <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
              {
                pageHeads.map((item, index) => {
                  return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                })
              }
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, backgroundColor: '#FFF', height: 'auto', minHeight: '100%',  }}
            >
              { this.props.children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>测试后台</Footer>
        </Layout>
        <Modal
          title="Basic Modal"
          visible={this.state.colorSelectModal}
          onOk={this.colorSelectModal}
          onCancel={this.colorSelectModal}
        >
          <SketchPicker color={this.state.color}  onChange={this.colorSelect} />
        </Modal>
      </Layout>
    )
  }
  colorSelectModal = () => {
    this.setState({
      colorSelectModal: !this.state.colorSelectModal
    })
  }
  colorSelect = (value) => {
    let color = value.hex;
    this.setState({color})

  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // 渲染父级路由
  renderParentMenu = (menus, index) => {
    console.log(menus)
    return (
      <Menu.Item onClick={ () => this.jumpPath(menus.path, index) }  key={index}>
        <HeartTwoTone twoToneColor="#eb2f96"  />
        <span className="nav-text">{ menus.name }</span>
      </Menu.Item>
    )
  }

  // 渲染子路由
  renderChildrenMenu = (menus, parentIndex) => {
    return (
       menus.children &&
         menus.children.map((item, childIndex) => {
          return (
            <Menu.Item onClick={ () => this.jumpPath(item.path) }  key={`${parentIndex}-${childIndex}`}>
              <HeartTwoTone twoToneColor="#eb2f96" />
              <span className="nav-text">{ item.name }</span>
            </Menu.Item>
          )
         })
    )
  }
  // 渲染页面名称
  renderPageHeard = (menus) => {

  }

  // 跳转路径
  jumpPath = (path, index) => {
    console.log('jumpPath', index)
    this.props.history.push(path)
  }
}
export default withRouter(MenuLayout)

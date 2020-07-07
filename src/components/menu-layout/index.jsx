import React from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons'
import { menus } from './menu'
import {
  LeftCircleTwoTone,
  RightCircleTwoTone
} from '@ant-design/icons';
const { SubMenu } = Menu;
const {
  Header,
  Content,
  Footer,
  Sider} = Layout;

class MenuLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menus,
      collapsed: false,
      selectedKeys: [],
      pageHeads: [],
      openKeys: []
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
    const { menus, selectedKeys, pageHeads, openKeys, collapsed } = this.state
    return(
      <Layout style={{ height: '100vh', display: 'flex' }} theme={'#eb2f96'}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.toggleCollapsed}>
          <div
            className="logo"
            style={{ height:  '100px', color: '#FFF', lineHeight: '100px', marginBottom: 10 }}
          >
            <img
              style={{ height: !collapsed ? 100 : 50, width: !collapsed ? 150 : 50, borderRadius: 50}}
              alt={'logo'}
              src={'data:image/jpeg;base64,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'}
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
        <Layout className="site-layout" style={{overflowY: 'scroll'}}>
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#FFF', textAlign: 'left' }} >
          </Header>
          <Content
            style={{
              padding: 24,
              height: 'auto',
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
              style={{ padding: 24, backgroundColor: '#FFF', height: 'auto', minHeight: '100%' }}
            >
              { this.props.children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>测试后台</Footer>
        </Layout>
      </Layout>
    )
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
    console.log(menus)
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

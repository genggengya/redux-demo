import React from 'react'
import { Tabs, Menu, Dropdown, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import './index.scss'

const { TabPane } = Tabs;
export default class TabsToDo extends React.Component{

  render() {
    const { dataTabs = [], tabKey, onChange } = this.props
    return (
      <Tabs activeKey={tabKey} onChange={onChange} centered={true}>
        <TabPane tab="待做" key="1">
          { this.renderContent(dataTabs, tabKey) }
        </TabPane>
        <TabPane tab="正在做" key="2">
          { this.renderContent(dataTabs, tabKey) }
        </TabPane>
        <TabPane tab="已完成" key="3">
          { this.renderContent(dataTabs, tabKey) }
        </TabPane>
      </Tabs>
    )
  }
  renderContent = (dataTabs, tabKey) => {
    const { updateToDoList } = this.props
    return (
      Array.isArray(dataTabs) &&
      dataTabs.filter((item) => item.type === tabKey).map((item, index) => {
        return (<div key={index} className={'tabs-item'}>
          { item.name }
          <div>
            <Dropdown overlay={
              <Menu>
                {
                  +tabKey !== 1 &&
                  <Menu.Item onClick={() => updateToDoList(item.name, '1')}>
                    改为待做
                  </Menu.Item>
                }
                {
                  +tabKey !== 2 &&
                  <Menu.Item onClick={() => updateToDoList(item.name, '2')}>
                    改为正在做
                  </Menu.Item>
                }
                {
                  +tabKey !== 3 &&
                  <Menu.Item onClick={() => updateToDoList(item.name, '3')}>
                    改为已完成
                  </Menu.Item>
                }
              </Menu>
            } placement="bottomLeft">
              <Button>编辑</Button>
            </Dropdown>
            <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} onClick={ () => this.deleteItem(item) }/>
          </div>
        </div>)
      })
    )
  }
  deleteItem = (data) => {
    const { dataTabs = [], deleteToDoList } = this.props
    let index = dataTabs.findIndex(item => item.name === data.name)
    deleteToDoList(index)
  }
}

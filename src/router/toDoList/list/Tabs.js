import React from 'react'
import { Tabs } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import './index.scss'

const { TabPane } = Tabs;
export default class TabsToDo extends React.Component{

  render() {
    const { dataTabs = [], tabKey, onChange } = this.props
    return (
      <Tabs activeKey={tabKey} onChange={onChange}>
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
    return (
      Array.isArray(dataTabs) &&
      dataTabs.filter((item) => item.type === tabKey).map((item, index) => {
        return (<p key={index} className={'tabs-item'}>
          { item.name + index}
          <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} onClick={ () => this.deleteItem(item) }/>
        </p>)
      })
    )
  }
  deleteItem = (data) => {
    const { dataTabs = [], deleteToDoList } = this.props
    let index = dataTabs.findIndex(item => item.name === data.name)
    deleteToDoList(index)
  }
}

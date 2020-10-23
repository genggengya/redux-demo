import React from 'react'
import { Button, Input, Modal, Form, Select } from 'antd'
import { connect } from 'react-redux'
import { getToDoList, addToDoList, deleteToDoList, updateToDoList } from '@/store/actions/toDo'
import TabsToDo from './Tabs'

@connect((state) => ({
  list: state.toDo.toDo
}), {
  getToDoList, addToDoList, deleteToDoList, updateToDoList
})

class ToDoList extends React.Component{
  // 类组件只能通过ref访问创建的Form，并使用Form内置方法
  formRef = React.createRef();

  state = {
    visible: false,
    tabKey: '1'
  }

  render() {
    const { Option } = Select;
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 4, span: 16 },
    };
    const { list, deleteToDoList, updateToDoList } = this.props
    const { visible, tabKey } = this.state
    console.log(list, 'list')
    return (
      <div>
        <TabsToDo
          updateToDoList={updateToDoList}
          deleteToDoList={deleteToDoList}
          dataTabs={list}
          tabKey={tabKey}
          onChange={(value) => this.onChange(value, 'tabKey', 1)}
        />
        <Button type='primary' onClick={() => this.onChange(!visible, 'visible')}>添加</Button>
        <Modal
          title="添加ToDo"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.handleOk}>
            <Form.Item name="name" label="name" rules={[{ required: true, message: '请填写名称' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="type" label="type" rules={[{ required: true, message: '请填写类型'  }]}>
              <Select
                allowClear
              >
                <Option value="1">待做</Option>
                <Option value="2">正在做</Option>
                <Option value="3">已完成</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
  onReset = () => {
    this.formRef.current.resetFields();
  }
  handleOk = (value) => {
    const { addToDoList } = this.props
    addToDoList(value).then(() => {
      this.onChange(false, 'visible')
    })
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  onChange= (value, arg, type) => {
    const { getToDoList } = this.props
    if (type === 1) {
      this.setState({
        [arg]: value
      }, () => {
        getToDoList(this.state.tabKey)
      })
    } else {
      this.setState({
        [arg]: value
      })
    }
  }
}

export default ToDoList

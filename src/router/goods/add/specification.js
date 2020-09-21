import React from 'react'
import { Button, Table, Select, InputNumber, Form, Input, Row, Col,  } from 'antd'
import './index.scss'

const { Option } = Select;

export default class Snow extends React.Component{
  formRef = React.createRef();

  render() {
    const { data, onChange } = this.props
    const labelCol = {span: 3, offset: 3}
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 5 },
    }
    return (
      <Form
        ref={this.formRef}
        name={'goodsInfo'}
        onFinish={this.onSubmit}
      >
        <Row>
          <Col span={5}>
            <Form.Item name="name" label="商品名称" rules={[{ required: true, message: '请输入商品名称' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="price" label="商品价格" rules={[{ required: true, message: '请输入商品价格' }]}>
              <InputNumber min={0} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="repertory" label="商品库存" rules={[{ required: true, message: '请输入商品库存' }]}>
              <InputNumber min={0} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="color" label="商品颜色" rules={[{ required: true, message: '请输入商品颜色' }]}>
              <Select mode='multiple'>
                <Option value={'红色'}>红色</Option>
                <Option value={'橙色'}>橙色</Option>
                <Option value={'黄色'}>黄色</Option>
                <Option value={'绿色'}>绿色</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Form.Item name="size" label="商品尺码" rules={[{ required: true, message: '请输入商品尺码' }]}>
              <Select mode='multiple'>
                <Option value={34}>34</Option>
                <Option value={35}>35</Option>
                <Option value={36}>36</Option>
                <Option value={37}>37</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Form.Item>
              <Button type='primary' htmlType={'submit'}>提交</Button>
              <Button onClick={() => {
                this.formRef.current.resetFields();
                onChange([], 'goodsData')
              }}>重置</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
  restForm = () => {

  }
  onSubmit = (values) => {
    const { specificationSubmit } = this.props
    let queryData = {...values}
    let data = []
    let id = 1
    queryData.color.map((item) => {
      queryData.size.map((sizeItem) => {
        let goodsItem = {
          id,
          name: queryData.name,
          price: queryData.price,
          repertory: queryData.repertory,
          color: item,
          size: sizeItem
        }
        id += 1
        data.push(goodsItem)
        return data
      })
      return data
    })
    specificationSubmit(data)
  }

}

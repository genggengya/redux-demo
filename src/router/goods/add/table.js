import React from 'react'
import { Table, InputNumber, Tag, Button } from 'antd'

export default class Snow extends React.Component{

  render() {
    const { onChange, deleteGoodsItemByIndex } = this.props
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
        render: (text, record, index) => {
          return <InputNumber
            value={text}
            onChange={(value) => onChange(value, 'goodsData', index, 'price')}
          />
        }
      },
      {
        title: '商品库存',
        dataIndex: 'repertory',
        key: 'repertory',
        render: (text, record, index) => {
          return <InputNumber
            value={text}
            onChange={(value) => onChange(value, 'goodsData', index, 'repertory')}
          />
        }
      },
      {
        title: '商品颜色',
        dataIndex: 'color',
        key: 'color',
        render: (text, record, index) => {
          switch (text) {
            case '红色':
              return <Tag color={'red'}>红色</Tag>
            case '橙色':
              return <Tag color={'orange'}>橙色</Tag>
            case '黄色':
              return <Tag color={'yellow'}>黄色</Tag>
            case '绿色':
              return <Tag color={'green'}>绿色</Tag>
            default:
              return
          }
        }
      },
      {
        title: '商品尺码',
        dataIndex: 'size',
        key: 'size',
        render: (text, record, index) => {
          return <InputNumber
            value={text}
            onChange={(value) => onChange(value, 'goodsData', index, 'size')}
          />
        }
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record, index) => {
          return <Button onClick={() => deleteGoodsItemByIndex(index)}>删除</Button>
        }
      }
    ]
    const { dataSource } = this.props
    return (
      <Table
        rowKey={(row) => row.id}
        columns={columns}
        dataSource={dataSource}
      />
    )
  }

}

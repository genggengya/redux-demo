import React from 'react'
import { Table, Image, Button, Space, Tooltip, Modal, message } from 'antd'
import qs from 'qs'
import Api from './date/data'

type MyState = {
  data: any[]
}

export default class MockTest extends React.Component<any, MyState> {
  constructor (props: any) {
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount  () {
    let data = [
      {
        id: 1
      }
    ]
    await Api.getList(qs.stringify(data, { arrayFormat: 'indices' })).then(res => {
      this.setState({
        data: res
      })
    })
    
    console.log(qs.stringify(data, { arrayFormat: 'indices' }))
  }

  putById = (data?: any) => {
    Api.putById({ ...data[0], name: '我我我我' }).then((res: any) => {
      message.success('gengxin成功')
      this.setState({
        data: res
      })
    })
  }

  detelteById = (id?: number | string) => {
    Api.detelteById(id).then((res: any) => {
      message.success('删除成功')
      this.setState({
        data: res
      })
    })
  }

  render () {
    const columns: any[] = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        width: 100,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Address',
        dataIndex: 'Address',
        key: 'Address',
      },
      {
        title: 'avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text: string) => <Image src={text} style={{ width: 50 }} />
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
      },
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
        render: (text: string) => {
          return (
            <Tooltip title={text}>
              <p style={{
                maxWidth: 240,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}>{ text }</p>
            </Tooltip>
          )
        }
      },
      {
        title: 'option',
        dataIndex: 'option',
        key: 'option',
        fixed: 'right',
        width: 200,
        render: (text: any, records: any) => {
          return (
            <Space>
              <Button onClick={ () => Api.getDetail(records.id).then(res => console.log(res)) }>详情</Button>
              <Button onClick={ () => Api.getDetail(records.id).then(res => this.putById(res)) }>模拟更新</Button>
              <Button onClick={ () => this.detelteById(records.id) }>删除</Button>
            </Space>
          )
        }
      },
    ];

    const { data } = this.state
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1000 }}
        />
      </div>
    )
  }
}
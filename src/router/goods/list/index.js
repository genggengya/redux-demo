import React from 'react'
import { Table, Badge, Menu, Dropdown, Space, Button, Upload } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import QRCode from 'qrcode.react';

import './index.scss'
const dataSource = [
  {
    key: '胡彦斌',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    index: 1,
  },
  {
    key: '胡彦祖',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号',
    index: 2,
  },
  {
    key: '33',
    name: '33',
    age: 52,
    address: '西湖区湖底公园3号',
    index: 3,
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '二维码',
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      return (
        <QRCode
          value="https://www.jianshu.com/u/992656e8a8a6"
          size={60} // 二维码的大小
        />
      )
    }
  },
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
];

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);
export default class Snow extends React.Component{

  state = {
    dataSource,
    columns,
    expandedRowKeys: []
  }

  componentDidMount () {
    function par (name) {
      this.name = name

      this.alertName = function () {
        return 1
      }
    }
    par.prototype.age = '12'
    // 构造函数继承
    // let a = new par('按')
    // let b = new par('轻轻期')
    // console.log(a, b, par)

    /* 
    原型链继承, 
    特点：
      非常纯粹的继承关系，实例是子类的实例，也是父类的实例
      父类新增原型方法/原型属性，子类都能访问到
      简单，易于实现
      缺点：
      要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
      无法实现多继承
      来自原型对象的所有属性被所有实例共享
      创建子类实例时，无法向父类构造函数传参
    */
    function Child () {
    }
    Child.prototype = new par('子')
    let chaild = new Child()
    let chaild2 = new Child()
  }

  expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      this.setState({ dataSource: newData });
    }
    console.log('Sorted items: ', oldIndex, newIndex);
  };

  DraggableContainer = props => {
    console.log(props)
    return (
      <SortableContainer
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    )
  };

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.name === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  onExpand = (expandedRowKeys) => {
    this.setState({
      expandedRowKeys
    }, () => {
      console.log(this.state.expandedRowKeys, '====')
    })
  }

  render() {
    const props = {
      name: 'file',
      action: 'https://zbdx.jzjtong.com/o2o-admin/v1/h5Activity/importActivityGoods',
      headers: {
        Authorization: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhZG1pbiIsInJlYWxOYW1lIjoi6IC_5YW16LaFIiwiYWRtaW5Sb2xlcyI6IltcIkRKQ1dcIixcIkNXU0hcIixcIkRKMDAxXCIsXCJTSkZYXCIsXCJUR1RaXCIsXCJDV0RaXCIsXCJUR1lZXCIsXCJDV0NaXCIsXCJIUzAwMVwiLFwidGVuYW50XCIsXCJNRFlZXCIsXCJXQUtGXCIsXCJESjAwMlwiLFwiQkhZWVwiLFwiV0FZWVwiXSIsImFkbWluX2FjY291bnRfcmVsYXRlIjoie1wiWkJESlwiOlt7XCJyZWxhdGVUeXBlXCI6MSxcInJlbGF0ZUlkXCI6W1wiMjNcIixcIjI1XCIsXCIyNlwiLFwiMjdcIixcIjI4XCIsXCI1MVwiLFwiMDJcIl19LHtcInJlbGF0ZVR5cGVcIjoyLFwicmVsYXRlSWRcIjpbXCIxNDFcIl19LHtcInJlbGF0ZVR5cGVcIjozLFwicmVsYXRlSWRcIjpbXCIxNDBcIl19XSxcIlpCSFNIXCI6W3tcInJlbGF0ZVR5cGVcIjoxLFwicmVsYXRlSWRcIjpbMV19XSxcIkJJTkdPXCI6W3tcInJlbGF0ZVR5cGVcIjoxLFwicmVsYXRlSWRcIjpbM119XSxcIldBTExFVFwiOlt7XCJyZWxhdGVUeXBlXCI6MSxcInJlbGF0ZUlkXCI6W1wiMV8tMV8tMVwiLFwiN18xMjJfLTFcIixcIjdfMTIzXy0xXCIsXCIxM18yXy0xXCIsXCIxM18zXy0xXCIsXCIxM180Xy0xXCIsXCIxM18xMDJfLTFcIixcIjEzXzEzMV8tMVwiLFwiMTNfMTMyXy0xXCIsXCI3XzEyMV8wMDAwMDAwMDAxOTczNDRcIixcIjdfMTIxXzAwMDAwMDAwMDE5NzMzN1wiLFwiN18xMjFfMDAwMDAwMDAwMTk3MzM1XCIsXCI3XzEyMV8wMDAwMDAwMDAxOTczMzNcIixcIjEzXzFfMVwiLFwiMTNfMV80XCJdfV19IiwiY3JtVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlKOS5leUpwYm5OMFlXNWpaVWxrSWpveE1qRXhPREE1TXpFM05qQXdOVGt3TURBd0xDSnNiMmRwYms1aGJXVWlPaUl4TXpBd05ESTRNelUxTmlJc0luUmxibUZ1ZEVsa0lqb3hNakV5TWpjMk16TTFNREUzTnpRek16WXpMQ0pwWkNJNk1USXlPRGMyTURBME5UWXhNREU0TnpnME1pd2lhblJwSWpvaU9XUm1PVE00TURrdFlUbGtaQzAwTmpFMUxXSXpZelV0TkdKaE1Ua3pNVEJtT0dSaklpd2libUptSWpveE5UazNPVEUyTVRjMExDSmxlSEFpT2pFMk1ETXhNREF4TnpSOS5aVWNaRXVKbWR3UXAwa2Vlc3FYMjgzaXpIUzhLZ1BHeFVKal8way1wNklzIiwicGhvbmUiOiIxMzAwNDI4MzU1NiIsImFkbWluSWQiOiIxMjI4NzYwMDQ1NjEwMTg3ODQyIiwibmlja25hbWUiOiJnYmMiLCJhZG1pblJvbGVzTWFwIjoie1wiQklfSE9URUxcIjpbXCJTSkZYXCJdLFwiVVNFUl9NR01UXCI6W1widGVuYW50XCJdLFwiV0FMTEVUXCI6W1wiQ1dTSFwiLFwiQ1dEWlwiLFwiQ1dDWlwiLFwiV0FLRlwiLFwiV0FZWVwiXSxcIlpCSFNIXCI6W1wiSFMwMDFcIl0sXCJNQUxMXCI6W1wiQkhZWVwiXSxcIlpCREpcIjpbXCJESkNXXCIsXCJESjAwMVwiLFwiREowMDJcIl0sXCJaWVNISlwiOltcIk1EWVlcIl0sXCJCSU5HT1wiOltcIlRHVFpcIixcIlRHWVlcIl19IiwiZXhwIjoxNTk4MzQ4MTc0LCJ1c2VyTmFtZSI6IjEzMDA0MjgzNTU2IiwiaWF0IjoxNTk3OTE2MTc0fQ.0LBIaEX1ac4crrg6F6FGJ4EJnLH2A-9meKFKggHgcP9ZrlaE3gtwr_HryQchutm-',
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        startAt: '1',
        endAt: '2'
      }
    }
    const { dataSource, columns, expandedRowKeys } = this.state
    return (<div style={{ textAlign: 'left' }}>
      <Button>
        <Upload
          {...props}
          onChange={this.onChangeUpload}
        >
          导图</Upload>
      </Button>

      <Button type='primary' onClick={this.jumpPath}>增加商品</Button>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandable={{
          expandedRowRender: this.expandedRowRender,
          onExpandedRowsChange: this.onExpand,
          expandedRowKeys,
          defaultExpandedRowKeys: expandedRowKeys,
          expandRowByClick: true
        }}
        dataSource={dataSource}
        rowKey="name"
        components={{
          body: {
            wrapper: (props) => this.DraggableContainer(props),
            row: (data) => this.DraggableBodyRow(data),
          },
        }}
      />
    </div>)
  }
  jumpPath = () => {
    this.props.history.push('/goods/add')
  }
  onChangeUpload = (file) => {
    console.log(file)
  }
}

import React from 'react'
import { Button, Card } from 'antd'
import InputNumber from "antd/lib/input-number";
import Zmage from 'react-zmage'
import {connect} from 'react-redux'

import './index.scss'

@connect((state) => ({
  phone: state.phone.phone
}), (dispatch) => ({

}))
class Login extends React.Component{
  state = {
    name: null,
    password: null
  }
  render () {
    const { phone } = this.props
    const CARD_TITLE_ONE = <p style={{ display: 'flex', justifyContent: 'space-between' }}>
      redux显示（取数据）
      <Button type='danger' ghost >H5页面输入的电话号</Button>
    </p>
    return (
      <div className='time-coupon'>
          {/* 基本信息 */}
          <Card
            title={ CARD_TITLE_ONE }
            headStyle={{ textAlign: 'left' }}
          >
            {
              Array.isArray(phone) &&
              phone.map((item, index) => {
                return (
                  <div className={'time-coupon-item'} key={index}>
                    <span className={'time-coupon-item-title'}>第{index + 1}个手机号</span>
                    <InputNumber value={item}/>
                  </div>
                )
              })
            }
          </Card>
        <Card
          title={ '测试数据' }
          headStyle={{ textAlign: 'left' }}
        >

        </Card>
      </div>
    )
  }
}
export default Login

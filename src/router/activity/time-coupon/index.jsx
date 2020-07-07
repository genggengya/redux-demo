import React from 'react'
import { Button, Card, Anchor } from 'antd'
import InputNumber from "antd/lib/input-number";
import Zmage from 'react-zmage'
import {connect} from 'react-redux'

import './index.scss'
const { Link } = Anchor;
const IMG = 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3675415932,4054970339&fm=26&gp=0.jpg'

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
    console.log(this.props)
    const { phone } = this.props
    const CARD_TITLE_ONE = <p style={{ display: 'flex', justifyContent: 'space-between' }}>
      基本信息
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
          {/* 图片信息 */}
          <Card
            title={ '图片信息' }
            headStyle={{ textAlign: 'left' }}
          >
            <div className={'time-coupon-item'}>
              <span className={'time-coupon-item-title'}>111</span>
              <Zmage src={IMG} alt={'图片'} style={{ width: '80px', height: '80px', verticalAlign: 'middle' }}/>
            </div>
            <div className={'time-coupon-item'}>
              <span className={'time-coupon-item-title'}>111</span>
              <Zmage src={IMG} alt={'图片'} style={{ width: '80px', height: '80px', verticalAlign: 'middle' }}/>
            </div>
            <div className={'time-coupon-item'}>
              <span className={'time-coupon-item-title'}>111</span>
              <Zmage src={IMG} alt={'图片'} style={{ width: '80px', height: '80px', verticalAlign: 'middle' }}/>
            </div>
            <div className={'time-coupon-item'}>
              <span className={'time-coupon-item-title'}>111</span>
              <Zmage src={IMG} alt={'图片'} style={{ width: '80px', height: '80px', verticalAlign: 'middle' }}/>
            </div>
          </Card>
      </div>
    )
  }
}
export default Login

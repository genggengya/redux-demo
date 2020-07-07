import React from 'react'
import { Button, Card, InputNumber, message } from 'antd'
import {connect} from 'react-redux'
import { addAgeCreater, LoseAgeCreater } from '@/store/actions/age'
import { addPhone, deletePhone, restPhone } from '@/store/actions/phone'
import './index.scss'
// 使用注解的方式修改state和组件之间的传值
// @connect(
//   //你需要state当中的什么参数 取出来就会放到props相对的参数当中
//   state=>({num:state}),
//   //你需要state当中的什么方法就可以写到下面的大括号中就能被放到props当中 并且会自动dispatch
//   {add_A,rem_R,addAsync}
// )
@connect((state) => ({
  age: state.age,
  personageInfo: state.addName,
  myPhone: state.phone.phone
}),{
  addPhone, deletePhone, restPhone, addAgeCreater, LoseAgeCreater
})
// {
//   addPhone, deletePhone, restPhone
// }
//  两个写法完全相等，
//(dispatch) => ({
//   addAgeCreater (age) {
//       return dispatch(addAgeCreater(age))
//     },
//   LoseAgeCreater (age) {
//     return dispatch(LoseAgeCreater(age))
//   },
//   addPhone (phone) {
//     return dispatch(addPhone(phone))
//   },
//   restPhone () {
//     return dispatch(restPhone())
//   }
class Login extends React.Component{
  state = {
    phone: null,
    password: null
  }
  componentDidMount() {
  }

  render () {
    const { addAgeCreater, LoseAgeCreater, restPhone, myPhone } = this.props
    const { phone } = this.state
    console.log(this.props)
    return (
      <div className='login'>
        <Card>
          <Button type='primary' onClick={() => addAgeCreater()}>增加年龄</Button>
          {this.props.age}
          <Button type='danger' onClick={() => LoseAgeCreater()}>减少年龄</Button>
        </Card>
        <Card>
          <InputNumber
            value={phone}
            onChange={(value) => {
                this.setState({
                  phone: value
                })
              }
            }
            style={{ width: 'auto' }}
          />
          <Button type='primary' onClick={ this.addPhone }>添加手机号</Button>
          <Button type='danger' onClick={ () => restPhone() }>清空手机号</Button>
          <p> 保存的手机号合集 </p>
          {
            Array.isArray(this.props.myPhone) &&
            this.props.myPhone.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          }
        </Card>
      </div>
    )
  }

  addPhone = () => {
    const { addPhone, myPhone } = this.props
    const { phone } = this.state
    let arg = /^[1]([3-9])[0-9]{9}$/
    if (!phone) {
      return message.error('只能输入数字')
    } else if(!arg.test(phone)) {
      return message.error('手机号格式错误')
    }  else if(myPhone.includes(phone)) {
      return message.error('已有此手机号，请勿重复添加')
    } else {
      return addPhone(phone)
    }
  }
}

export default Login

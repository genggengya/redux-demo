import React from 'react'
import { Button, Card, InputNumber, message, Form, Input, Select, Radio } from 'antd'
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
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

@connect((state) => ({
  age: state.age,
  personageInfo: state.addName,
  myPhone: state.phone.phone
}),{
  addPhone, deletePhone, restPhone, addAgeCreater, LoseAgeCreater
})

class Login extends React.Component{
  formRef = React.createRef();
  state = {
    phone: null,
    password: null
  }
  componentDidMount() {
  }

  render () {
    const { addAgeCreater, LoseAgeCreater, restPhone, myPhone } = this.props
    const { phone } = this.state
    return (
      <div className='login'>
        <Card
          headStyle={{ textAlign: 'left' }}
          title={'redux计数器简易版'}
        >
          <Button type='primary' onClick={() => addAgeCreater()}>增加年龄</Button>
          {this.props.age}
          <Button type='danger' onClick={() => LoseAgeCreater()}>减少年龄</Button>
        </Card>
        <Card
          headStyle={{ textAlign: 'left' }}
          title={'redux存储'}
        >
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
        <Card
          headStyle={{ textAlign: 'left' }}
          title={'V4版本Form表单'}
        >
          <Form
            onFinish={this.onSubmit}
            name="test_one"
          >
            <Form.Item
              {...formItemLayout}
              name="username"
              label="名称"
              rules={[
                {
                  required: true,
                  message: '请输入名称',
                },
              ]}
            >
              <Input placeholder="请输入名称" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="passWord"
              label="密码"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
            >
              <Button type='primary' htmlType={'submit'}>提交</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  onSubmit = (values) => {
    console.log(values)
  }
  // 实验Promise
  creatPromise = async () => {
    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
      resolutionFunc(777);
    });
    // At this point, "promiseA" is already settled.
    promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
    console.log("immediate logging");
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

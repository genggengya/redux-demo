import React from 'react'
import { Button, Spin, Alert } from 'antd'

// import './index.scss'

export default class Login extends React.Component{
  state = {
    name: null,
    password: null,
    loading: false
  }
  render () {
    const { loading } = this.state
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div className='login'>
        <Button
          onClick={ () => {
            this.setState({
              loading: !loading
            })
          } }
        >
          { !loading
            ? '开启'
            : '关闭'
          }
        </Button>
        <Spin spinning={loading} delay={500}>
          { container }
        </Spin>
      </div>
    )
  }
}

import React from 'react'
import {Result, Button} from 'antd'

export default class NotFound extends React.Component<any>{
    constructor(props: any) {
        super(props)
        this.state = {

        }
        this.goHome = this.goHome.bind(this)
    }
    render() :any{
        return (
            <Result
                status="404"
                title="页面没找到"
                extra={<Button type="primary" onClick={() => this.goHome()}>回到首页</Button>}
            />
        )
    }
    goHome() {
        this.props.history.push('login')
    }
}

import React from 'react'
import './index.scss'

export default class Snow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  onLoad = () => {
    this.setState({
      show: true
    })
    // setTimeout(() => {
    //   this.setState({
    //     show: true
    //   })
    // }, 1000)
  }

  render() {
    const { show } = this.state
    return (<div class="effect">
      <img
        src={!show ? 'http://placehold.it/400x200/' : 'http://img.netbian.com/file/2018/0515/4c22e81fd40d8c9d04449aa5bc6a5b7e.jpg'}
        onLoad={() => this.onLoad()}
      />
    </div>)
  }
}

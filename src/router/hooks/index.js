import React from 'react'

import 'emoji-mart/css/emoji-mart.css'
import Example from './view/index'
import TestUseEffect from './view/userEffect'

export default class HooksTest extends React.Component{
  componentDidMount () {
  }

  render() {
    return (
      <div>
        <Example/>
        <TestUseEffect />
      </div>
    )
  }
}

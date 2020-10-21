import React from 'react'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import Example from './view/index'

export default class HooksTest extends React.Component{

  render() {
    return (
      <div>
        {/*<Picker onSelect={this.addEmoji} />*/}
        <Example/>
      </div>
    )
  }
  addEmoji = () => {

  }
}

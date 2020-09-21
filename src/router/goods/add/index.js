import React from 'react'
import { Button, Table } from 'antd'
import Specification from './specification'
import GoodsTable from './table'

export default class Snow extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      goodsData: [],
      goodsName: ''
    }
  }
  render() {
    const { goodsData } = this.state
    return (<div>
      <Specification
        specificationSubmit={this.specificationSubmit}
        data={goodsData}
        onChange={this.onChange}
      />
      {
        goodsData.length > 0 &&
        <GoodsTable
          deleteGoodsItemByIndex={this.deleteGoodsItemByIndex}
          onChange={this.onChange}
          dataSource={goodsData}
        />
      }
    </div>)
  }
  specificationSubmit = (goodsData) => {
    this.onChange(goodsData, 'goodsData')
  }

  onChange = (value, parent, index = null, child = null) => {
    this.setState((prevState) => {
      let t = prevState
      if (child) {
        t[parent][index][child] = value
      } else {
        t[parent] = value
      }
      return t
    })
  }
  deleteGoodsItemByIndex = (index) => {
    const { goodsData } = this.state
    let vesselData = [...goodsData]
    vesselData.splice(index, 1)
    this.setState({
      goodsData: vesselData
    })
  }
}

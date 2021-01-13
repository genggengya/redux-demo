import React, { useState } from 'react'
import { Progress } from 'antd'

import './index.scss'

const Schedule = (props: any) => {
  const { dataSource, style, title } = props
  let maxNum = dataSource[0].num
  return (
    <div style={{ ...style }} className='schedule'>
      <p className='title'>{ title }</p>
      {
        Array.isArray(dataSource) &&
        dataSource.map((item, index) => {
          return (
            <div className='schedule-item'>
              <div className='schedule-item-top'>
                <p className='name-box'>
                  <span className={ index > 2 ? 'blur' : 'red' }>NO.{ index + 1 }</span>
                  <span className='name'>{ item.name }</span>
                </p>
                <span className='figure'>
                  {
                    item.num
                  }
                </span>
              </div>
              <Progress
                showInfo={false}
                percent={ Number((item.num / maxNum).toFixed(2)) * 100 }
                strokeColor={ index > 2 ? 'blur' : 'red' }
                trailColor={'transparent'}
              />
            </div>
          )
        })
      }
    </div> 
  )
}
export default Schedule
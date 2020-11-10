import React from 'react'
import './index.scss'

const Description = (props : any) => {

  const {
    leftTitle, leftNum, leftUnit,
    rightTitle, rightNum, rightUnit,
    type, style
   } = props
  return (
    <div className='description' style={{ ...style }}>
      <div className='left'>
        <div className='left-strip'/>
        <div className='content'>
          <p>
            <span className='content-title'>{leftTitle}</span>
          </p>
          <p>
            <span className='content-value'>{leftNum}</span>
           <span className='content-title'>{ leftUnit }</span>
          </p>
        </div>
      </div>
      <div className='content'>
        <p>
          <span className='content-title'>{rightTitle}</span>
        </p>
        <p>
          <span className='content-value'>{rightNum}</span>
          <span className='content-title'>{ rightUnit }</span>
          {
            type === 'add'
             ? <div className='add-icon'/>
             : <div className='minus-icon'/>
          }
        </p>
      </div>
    </div>
  )

}

export default Description
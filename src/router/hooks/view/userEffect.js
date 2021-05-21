import React, { useState, useEffect, useCallback, useMemo } from 'react'

const TestUseEffect = (props) => {
  // constructor
  const [name, setName] = useState('a')
  const [age, setAge] = useState('2')

  // componentDidmount
  useEffect(() => {
    console.log(name, '111')
  }, [])

  // componentDidupdate
  useEffect(() => { 
    console.log(name, age, '-----------')
    // 接受的参数代表只针对这一个参数进行对比,不一样则会触发, 不接受参数也可实现
  })

  // componentWillUnmount
 useEffect(() => {
   console.log('组件初始化, 来了老弟')
    return function () {
      console.log('组件销毁, 老弟慢走', '=====')
    }
  }, [])

  // getDerivedStateFromProps
  const changeName = () => {
    return setName((Math.random()*10 +''), () => {
      console.log(name, '测试')
    })
  }
  
  
  // render
  return (
    <p onClick={ changeName }>{ name }</p>
  )
}

export default TestUseEffect
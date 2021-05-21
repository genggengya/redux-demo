import React from 'react'
import Circle from '@/components/plan'

interface myObj {
  name: string,
  age: number,
}
type MyState = {
  started: boolean
}

export default class TsTest extends React.PureComponent<any, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      started: false
    }
  } 

  obj: myObj = {
    name: '2222222',
    age: 1,
  }

  componentDidMount () {
   
  }


  
  public get getMyName () : string {
    return this.obj.name
  }

  add = (x: string, y: string) => {
    console.log(x + y)
    return +'1'
  }
  
  startedChange = () => {
    this.setState((prevState: any) => {
      return { ...prevState, started: !prevState.started }
    })
  }

  render () {
    const { started } = this.state
    return (
      <div>
        <div className="animated bounce infinite" id="dowebok" style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
        <h1 className="animated infinite bounceOutRight delay-2s" style={{ width: 100, height: 100, backgroundColor: 'red' }}>animate demo</h1>
      </div>
    )
  }
}
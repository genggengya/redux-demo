import React from 'react'
import Echarts from '@/components/echarts'

class Login extends React.Component{
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Echarts
          title={'远赴人间惊洪宴'}
          id={'one'}
        />
        <Echarts
          title={'一睹人间盛世颜'}
          id={'two'}
          restItemColor={['#FF88C2', '#FF8888']}
          xAxisData={['2011', '2012', '2013', '2014']}
          yAxisData={{
            ydata1: [ 41.1, 30.4, 65.1, 53.3],
            ydata2: [24.1, 67.2, 79.5, 86.4]
          }}
        />
        <Echarts
          title={'谈笑风生不动情'}
          id={'three'}
          showType={'line'}
          restItemColor={['#9F88FF', '#FF77FF']}
          xAxisData={['2011', '2012', '2013', '2014']}
          yAxisData={{
            ydata1: [ 41.1, 30.4, 65.1, 53.3],
            ydata2: [24.1, 67.2, 79.5, 86.4]
          }}
        />
      </div>
    );
  }
}
export default Login

import React from 'react'
import Echarts from '@/components/echarts'

class Login extends React.Component{
  componentDidMount() {
    var twoSum = function(x) {
      let resultArray = String(x).split('')
      let after = ''
      for(let i = x > 0 ? 0 : resultArray.length - 1; i > 0; i--) {
        if (resultArray[i] > 0) {
          after = after.concat(resultArray[i])
        }
      }
      if (x < 0) {
        after = '-' + after
      }
      return after
    };
    console.log(twoSum(1234))
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

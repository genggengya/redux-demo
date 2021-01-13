import React from 'react'
import { Row, Col } from 'antd'

import Echarts from '@/components/echarts'
import Schedule from '@/components/schedule'
import Description from '@/components/description'

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
    let backColor = '#000088'
    let textColor = '#FFF'
    let optionOne = {
        title: {
          text: "Main Title",
          textStyle: {
            color: textColor
          }
        },
        grid: {
          show: false
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisLabel: {
              color: textColor
            },
            axisTick: {
              show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
              color: textColor
            },
            splitLine: {
              show: false
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'transparent'
            },
            color: ['#00BBFF'],
            barWidth: 16,
        }]
    };
    let optionTwo = {
      title: {
        text: "Main Title",
        textStyle: {
          color: textColor
        }
      },
      grid: {
        show: false
      },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          axisLabel: {
            color: textColor
          },
          axisTick: {
            show: false
          }
      },
      yAxis: {
          type: 'value',
          axisLabel: {
            color: textColor
          },
          splitLine: {
            show: false
          }
      },
      series: [{
          data: [120, 200, 150, 80, 70],
          type: 'line',
          showBackground: true,
          backgroundStyle: {
              color: 'transparent'
          },
          color: ['#EEEE00'],
          label: {
            show: true
          }
      }]
  };
    let dataProgress = [
      {
        num: 33509,
        name: '1长城干红葡萄酒'
      },
      {
        num: 23509,
        name: '2长城干红葡萄酒'
      },
      {
        num: 13509,
        name: '3长城干红葡萄酒'
      },
      {
        num: 13509,
        name: '4长城干红葡萄酒'
      },
      {
        num: 13509,
        name: '5长城干红葡萄酒'
      }
    ]
    let optionPie = {
      tooltip: {
          trigger: 'item',
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              // roseType: 'area',
              label: {
                  show: true,
                  position: 'outside'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '12',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: true
              },
              data: [
                  {value: 500, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
              ]
          }
      ]
  }
    return (
      <div
        style={{ margin: '-24px' }}
      >
        <Row>
          <Col span={4} style={{ height: 610 }}>
            <Schedule
              style={{
                backgroundColor: backColor,
                height: 300,
              }}
              title='日销售商品top5 -【销售额】（元）'
              dataSource={dataProgress}
            />
            <Schedule
              style={{
                backgroundColor: backColor,
                marginTop: 10,
                height: 300,
              }}
              title='日销售商品top5 -【销售额】（元）'
              dataSource={dataProgress}
            />
          </Col>
          <Col span={8} style={{ marginLeft: 10, height: 610 }} >
            <Description
              style={{
                backgroundColor: backColor,
                height: 60
              }}
              leftTitle={'本年度销售总额'}
              leftNum={'2299.65'}
              leftUnit='万元'
              rightTitle='销售总额同比增长'
              rightNum='14.45'
              rightUnit='%'
              type='add'
            />
            <Description
              style={{
                backgroundColor: backColor,
                height: 60
              }}
              leftTitle={'本年度销售总额'}
              leftNum={'2299.65'}
              leftUnit='万元'
              rightTitle='销售总额同比增长'
              rightNum='14.45'
              rightUnit='%'
              type='minus'
            />
            <Echarts
              style={{
                backgroundColor: backColor,
                height: 490,
                maxWidth: 550
              }}
              id={'one'}
              option={{...optionPie}}
            />
          </Col>
          <Col span={7} style={{ marginLeft: 10, height: 610 }} >
            <Description
              style={{
                backgroundColor: backColor,
                height: 60
              }}
              leftTitle={'本年度销售总额'}
              leftNum={'2299.65'}
              leftUnit='万元'
              rightTitle='销售总额同比增长'
              rightNum='14.45'
              rightUnit='%'
              type='add'
            />
            <Description
              style={{
                backgroundColor: backColor,
                height: 60
              }}
              leftTitle={'本年度销售总额'}
              leftNum={'2299.65'}
              leftUnit='万元'
              rightTitle='销售总额同比增长'
              rightNum='14.45'
              rightUnit='%'
              type='minus'
            />
            <Echarts
              style={{
                backgroundColor: backColor,
                height: 490,
                maxWidth: 550
              }}
              id={'seven'}
              option={{...optionPie}}
            />
          </Col>
          <Col span={4} style={{ height: 610, marginLeft: 10 }}>
            <Schedule
              style={{
                backgroundColor: backColor,
                height: 610,
              }}
              title='日销售商品top10 -【销售额】（元）'
              dataSource={[...dataProgress, ...dataProgress]}
            />
          </Col>
        </Row>
        <Row
          style={{ marginTop: 10 }}
        >
          <Echarts
            style={{
              backgroundColor: backColor,
              height: 400,
              minWidth: 275,
              maxWidth: 550
            }}
            id={'two'}
            option={{...optionOne}}
          />
            <Echarts
            style={{
              backgroundColor: backColor,
              height: 400,
              minWidth: 200,
              maxWidth: 550,
              marginLeft: 10,
            }}
            id={'three'}
            option={{...optionOne}}
          />
            <Echarts
            style={{
              backgroundColor: backColor,
              height: 400,
              minWidth: 200,
              maxWidth: 550,
              marginLeft: 10,

            }}
            id={'four'}
            option={{...optionOne}}
          />
            <Echarts
            style={{
              backgroundColor: backColor,
              height: 400,
              minWidth: 200,
              maxWidth: 550,
              marginLeft: 10,
            }}
            id={'five'}
            option={{...optionOne}}
          />
            <Echarts
            style={{
              backgroundColor: backColor,
              height: 400,
              minWidth: 200,
              maxWidth: 550,
              marginLeft: 10,
            }}
            id={'six'}
            option={{...optionTwo}}
          />
        </Row>
      </div>
    );
  }
}
export default Login

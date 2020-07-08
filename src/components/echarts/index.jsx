/*
* series 为一个对象，可以定制图形的样式，
*   name --> 图形名称
*   type --> 折线 | 饼图 | 其他
*   data --> 每点的数据
*   markPoint --> 定制点标记，样式随着图形的颜色改变
*   itemStyle -- > 定制当前图形的样式
*   markLine -->  线标记，样式随着图形的颜色改变
* */
import React from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts';

class Login extends React.Component{
  componentDidMount() {
    const { id, title, yAxisData, xAxisData, restItemColor, showType = 'bar' } = this.props
    const xdata = xAxisData
      ? [...xAxisData]
      : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    const ydata = yAxisData
      ? {...yAxisData}
      : {
          ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 132.2, 32.6, 20.0, 6.4, 3.3],
          ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        }
    const lineColor = restItemColor
      ? [...restItemColor]
      : ['#AAAAAA', '#5599FF']
    // 初始化
    var myChart = echarts.init(document.getElementById(id));
    // 绘制图表
    myChart.setOption({
      title: { text: title },
      tooltip : {
        trigger: 'axis',
        axisPointer: { // 显示此刻悬停位置的Y轴刻度
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      legend: {
        data:['蒸发量','降水量']
      },
      toolbox: { // 右上角的菜单
        show : true,
        feature : {
          dataView : {show: true, readOnly: false}, // 纯数字文本展示
          magicType : {show: true, type: ['line', 'bar']}, // 折线图和树状图转换
          restore : {show: true}, // 刷新
          saveAsImage : { // 保存图片
            show: true,
            type: 'jpg'
          }
        }
      },
      xAxis : [
        {
          type : 'category',
          data : xdata,
          axisTick: {
            alignWithLabel: true
          },
          // 是否显示X轴---每刻度的下标小箭头
          // axisTick: {show: false},
          axisLine: {show: false}, // 单独隐藏坐标线，X轴的主线
        }
      ],
      yAxis : [
        {
          type : 'value',
          name: '蒸发量',
          axisTick: {show: false}, // 显示刻度
          axisLine: { // 线的样式
            lineStyle: {
              color: lineColor[0]
            },
            // show: false // 显示轴线
          },
          axisLabel: { // 默认的Y轴显示
            formatter: '{value} ml'
          },
          itemStyle: {
            normal: {
              color: lineColor[0]
            }
          }
        },
        {
          type : 'value',
          name: '降水量',
          position: 'right',
          axisTick: {show: false}, // 显示刻度
          axisLine: { // 线的样式
            lineStyle: {
              color: lineColor[1]
            },
            // show: false // 显示轴线
          },
          axisLabel: {
            formatter: '{value} ml'
          },
        },
      ],
      series : [
        {
          name:'蒸发量',
          type: showType, // 图的类型（柱状、折线）
          data: ydata.ydata1,
          markPoint : {
            data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
            ]
          },
          itemStyle: {
            normal: {
              color: lineColor[0]
              // color: new echarts.graphic.LinearGradient(
              //   0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参z 数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
              //   [
              //     {offset: 0, color: '#AAAAAA'},
              //     {offset: 0.5, color: '#DDDDDD'},
              //     {offset: 1, color: '#EEE'}
              //   ])
            }
          },
          markLine : {
            data : [
              {type : 'average', name: '平均值'}
            ]
          },
        },
        {
          name:'降水量',
          type: showType,
          data: ydata.ydata2,
          yAxisIndex: 1, // 多加的Y轴排列，从零排序，默认为零，加一个就是排序就是 0 + 1 = 1
          markPoint : {
            data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
            ]
          },
          itemStyle: {
            normal: {
              color: lineColor[1]
              // color: new echarts.graphic.LinearGradient(
              //   0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
              //   [
              //     {offset: 0, color: '#2479fc'},
              //     {offset: 0.5, color: '#259dfc'},
              //     {offset: 1, color: '#26c3fd'}
              //   ])
            }
          },
          markLine : {
            data : [
              {type : 'average', name : '平均值'}
            ]
          }
        },
      ]
    });
    // myChart.hideLoading();
  }
  render() {
    const { id } = this.props
    return (
      <div id={id} style={{ width: '80%', height: 500 }}>
      </div>
    );
  }
}
export default Login

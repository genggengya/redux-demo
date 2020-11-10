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
import echarts from 'echarts'
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/chart/bar';
import 'echarts/src/chart/pie';

class Login extends React.Component{
  componentDidMount() {
    const { id, option } = this.props
    // 初始化
    var myChart = echarts.init(document.getElementById(id));
    // 绘制图表
    myChart.setOption({ ...option })
    myChart.hideLoading();
  }
  render() {
    const { id, style } = this.props
    console.log(style)
    return (
      <div id={id} style={{...style }}>
      </div>
    );
  }
}
export default Login

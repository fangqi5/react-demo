import React, { Component } from 'react'
import { Chart } from '@antv/g2';
// import dataList from './data'
import PropTypes from 'prop-types'

export class Line extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.initBar();
    }

    componentDidUpdate(prevProps){
        if(prevProps.data !== this.props.data){
            this.initBar()
        }
    }

    initBar = () => {
        const { data } = this.props
          // Step 1: 创建 Chart 对象
          const chart = new Chart({
            container: 'c1', // 指定图表容器 ID
            width : 600, // 指定图表宽度
            height : 300, // 指定图表高度
            padding:'auto'
          });
          // Step 2: 载入数据源
          chart.source(data);
          chart.legend(false)
          // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
          chart.line().position('year*value').color('value').tooltip('year*value',function(year,value){
              return{
                title: year,
                name: '班平均分',
                value: value === null ? '缺考' : value,
              }
          })
          chart.point().position('year*value').color('value').size('value', val => {
              return val&&3
          })
          // Step 4: 渲染图表
          chart.render();
    }

    render() {
        return (
            <div>
                <div id='c1'>
                </div>
            </div>
        )
    }
}

export default Line

Line.propTypes = {
    data:PropTypes.array
}

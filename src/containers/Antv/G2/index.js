import React, { Component } from 'react'
import G2 from '@antv/g2';
import dataList from './data'
export class Gtwo extends Component {

    componentDidMount(){
        this.initBar();
    }

    initBar(){
          // Step 1: 创建 Chart 对象
          const chart = new G2.Chart({
            container: 'c1', // 指定图表容器 ID
            width : 600, // 指定图表宽度
            height : 300, // 指定图表高度
            padding:'auto'
          });
          // Step 2: 载入数据源
          chart.source(dataList.data);
          chart.legend(false)
          // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
          chart.line().position('year*value').color('value')
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

export default Gtwo

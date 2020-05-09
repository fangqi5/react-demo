import React, { Component } from 'react'
import { Chart } from '@antv/g2';
import { Bar } from './stackedhistogram'
import Line from './line'
// import dataList from './data'
export class Gtwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                { year:'sa1',value:1.2,miss:false },
                { year:'sa2',value:0.2,miss:false },
                { year:'sa3',value:null,miss:true },
                { year:'sa4',value:1.5,miss:false },
                { year:'sa5',value:2.4,miss:false },
                { year:'sa6',value:3,miss:false },
            ]
        }
    }

    componentDidMount(){
        // this.initBar();
    }

    initBar = () => {
        const { data } = this.state
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

    changeData = () => {
        this.setState({data:[
            { year:'撒的撒打算1',value:1.2,miss:false },
            { year:'撒的撒打算2',value:0.2,miss:false },
            { year:'撒的撒打算3',value:null,miss:true },
            { year:'撒的撒打算4',value:1.5,miss:false },
            { year:'撒的撒打算5',value:2.4,miss:false },
            { year:'撒的撒打算6',value:3,miss:false },
        ]})
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <Line data={data} />
                <Bar />
                <button onClick={this.changeData}>点击改变data数据</button>
            </div>
        )
    }
}

export default Gtwo

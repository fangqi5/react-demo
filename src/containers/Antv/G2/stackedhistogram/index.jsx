//堆叠柱状图
import React, { Component } from 'react'
import G2 from '@antv/g2';
// import PropTypes from 'prop-types'

export class StackedHistogram extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.initBar();
    }

    initBar(){
            const data = [
                { genre: '中国（北京）',type:'首都', sold: 275 },
                { genre: '中国（北京）',type:'城市', sold: 100 },
                { genre: '中国（北京）',type:'农村', sold: 500  },
                { genre: '中国（南京）',type:'首都', sold: 784 },
                { genre: '中国（南京）',type:'城市', sold: 100  },
                { genre: '中国（南京）',type:'农村', sold: 600 }
            ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
            // Step 1: 创建 Chart 对象
            const chart = new G2.Chart({
                container: 'charts', // 指定图表容器 ID
                width : 600, // 指定图表宽度
                height : 300 // 指定图表高度
            });
            // Step 2: 载入数据源
            chart.source(data);
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            // chart.coord().transpose();
            chart.axis('x', {
                line: {
                    stroke: "#fc3000",
                    lineDash:[2,3],
                    strokeOpacity:1
                },
                label:{
                    rotate:90,
                    textStyle:{
                        fill:'blue'
                    }
                }
            })
            chart.legend(false)
            chart.intervalStack().position('genre*sold').color('type',function(type){
                let color = ''
                switch(type){
                    case '首都':
                        color = '#333333'
                        break
                    case '城市':
                        color = '#fbc800'
                        break;
                    case '农村':
                        color = '#f82c00'
                        break

                }
                return color
            })
            // Step 4: 渲染图表
            chart.render();
    }

    render() {
        return (
            <div>
                <div id="charts"></div>
            </div>
        )
    }
}

export default StackedHistogram

import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid'  
import 'echarts/lib/component/legend'  
import 'echarts/lib/component/title';

export class Pies extends Component {
    
    componentDidMount(){
        this.initChart();
    }

    initChart = () =>{
        let MyChart = echarts.init(document.getElementById('pies'));
        MyChart.setOption({
            title: { 
                text: '周红花增长趋势图',
                left:'45%',
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    color:['#1fb5ab','blue','red','black','pink'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        
                        show: true,
                        lineStyle:{
                            color:'red'
                        },
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <div id='pies' style={{height:400,width:400,border:"1px solid #1fb5ab"}}>
                </div>
            </div>
        )
    }
}

export default Pies

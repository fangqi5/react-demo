    import React, { Component } from 'react'
    import ReactEcharts from 'echarts-for-react'

    export default class Echarts extends Component {
    constructor(props){
        super(props);
        this.state = {
            averageValue:[22,25,58,64],
            maxValue:[100,65,79,86],
            date:['8.5-8.11', '8.12-8.18', '8.19-8.25', '8.26-9.1']
        }
    }
    setOption = () =>{
        const { averageValue,maxValue,date } = this.state;
        const option = {
            title: { 
                text: '周红花增长趋势图',
                left:'45%',
            },
            tooltip: {
                show:true,
                trigger:'axis',
                axisPointer : {
                    type : 'line', 
                    snap:'true',
                    axis:'auto',
                },
                backgroundColor:'#999',
                borderColor:'#1fb5ac',
                textStyle:{
                    color:'white',
                    textBorderColor:'transparent'
                },
                confine:true
            },
            legend:{
                left:'85%',
                animation:false,
                data:[
                    {
                        name:'人均',
                    },
                    {
                        name:'最多',
                    }
                ]
            },
            grid:{
                left:'center',
                containLabel: true ,
                width:'100%',
                rorate:-30
            },
            toolbox:{
                show:true,
            },
            dataZoom:[
                //内部滑动
                {
                    type:'inside',
                    start:0,//默认为0  
                    end: 50,    
                    show: true,  
                    realtime:true,
                },  
                //外部滑动  
                {  
                    type: 'slider',  
                    show: true,  
                    realtime:true, 
                    start: 0,//默认为1  
                    end: 50,
                    orient:'horizontal',
                },  
            ],
            xAxis: [
                {
            　　　　 type: 'category',
            　　　　 data: date,
                    boundaryGap:['1','1'],
                    axisLabel:{
                        show:true,
                        rotate:-40,
                    },
                    
                },
            ],
        　　yAxis: [{
        　　　　 type: 'value',
        　　}],
        　　series: [
                {
                    name:'人均',
                    type:'bar',
                    data:averageValue,
                    color:'black',
                    barWidth:50,
                    barMaxWidth:50,
            　　 },
                {
                    name:'最多',
                    type:'bar',
                    data:maxValue,
                    color:'gray',
                    barWidth:50,
                    barMaxWidth:50,
            　　 },
            ]
        }
        return option;
    }
    render() {
        return (
            <div>
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.setOption()}></ReactEcharts>
            </div>
        )
    }
    }

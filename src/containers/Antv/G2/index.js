import React, { Component } from 'react'
import G2 from '@antv/g2';
// import dataList from './data'
export class Gtwo extends Component {

    componentDidMount(){
        this.initBar();
    }

    initBar(){
        let data = [
            { year:'撒的撒打算1',value:1.2,miss:false },
            { year:'撒的撒打算2',value:0.2,miss:false },
            { year:'撒的撒打算3',value:null,miss:true },
            { year:'撒的撒打算4',value:1.5,miss:false },
            { year:'撒的撒打算5',value:2.4,miss:false },
            { year:'撒的撒打算6',value:3,miss:false },
        ]
          // Step 1: 创建 Chart 对象
          const chart = new G2.Chart({
            container: 'c1', // 指定图表容器 ID
            width : 600, // 指定图表宽度
            height : 300, // 指定图表高度
            padding:'auto'
          });
          // Step 2: 载入数据源
          chart.source(data,function(data){
              console.log(data)
          });
          chart.axis('value',{
            label:{
                // formatter(text, item,index) {
                //     console.log(text,item,index)
                //     if(text < 0){
                //         return text = 0
                //     }
                //     return text
                // },
            }
          })
          chart.legend(false)
        //   chart.tooltip({
        //     useHtml:true, 
        //     htmlContent:function htmlContent(title,items){
        //        return `<div class="g2-tooltip">
        //             <div class="custom-tooltip-title" style="margin-bottom: 0px;">${ title }</div>
        //             <ul class="custom-tooltip-items">
        //                 <li class="custom-tooltip-item">
        //                 ${ console.log(title,items) }
        //                 </li>
        //                 <li class="custom-tooltip-item">
        //                 ${ items }
        //                 </li>
        //             </ul>
        //        </div>`
        //     }
        //     // itemTpl: '<li data-index={index}>' +
        //     //     '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
        //     //     `{name}: ` +
        //     //     '</li>'
        //   })
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

export default Gtwo

import React, { Component } from 'react'
import G2 from '@antv/g2';
import PropTypes from 'prop-types'

export class ClassBar extends Component {
    constructor(props){
        super(props);
        this.chart = null
    }

    componentDidMount(){
        this.drawChart()
    }

    componentDidUpdate(prevProps){
        if(prevProps.percentList !== this.props.percentList){
            this.destroyChart()
            this.drawChart()
        }
    }

    componentWillUnmount(){
        this.destroyChart()
    }

    destroyChart = () => {
        this.chart && this.chart.destroy()
    }

    drawChart = () => {
        const { percentList } = this.props
        const chart = new G2.Chart({
            container:'bar',
            width:600,
            height:400,
            padding:[30,30,30,60],
            background:{
                fill:'#fcfcfa',
                opacity:0.5
            }
        })

        this.chart = chart
    
        chart.source(percentList)

        chart.axis('percent',{
            label:{
                formatter:function(val){
                    return val * 100 + '%'
                }
            },
        })
    
        chart.interval().position('className*percent').tooltip('className*percent',function(className,percent){
            return {
                name:'完成率：',
                value:percent*100+'%'
            }
        }).color('#ffca3a').size(10);

        chart.render()
    }

    render() {
        return (
            <div id="bar"></div>
        )
    }
}

export default ClassBar

ClassBar.propTypes = {
    percentList:PropTypes.array
}

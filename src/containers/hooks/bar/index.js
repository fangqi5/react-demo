import React, { useEffect } from 'react'
import G2 from '@antv/g2';
import PropTypes from 'prop-types';

const bar = ({percentList}) => {
    
    useEffect(()=>{
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

        return ()=>chart.destroy()
    },
    [percentList])
    
    return (
        <div id="bar"></div>
    )
}

export default bar

bar.propTypes = {
    percentList:PropTypes.array
}
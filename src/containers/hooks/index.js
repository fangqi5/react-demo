import React,{useState,useEffect,Component} from 'react'
import PropTypes from 'prop-types'
import styles from './index.scss'
import Bar from './bar'
// import Bar from './classBar'
const data = [
    {
        grade:1,
        percentList:[
            {
                className:'一年级一班',
                classId:1,
                percent:0.2
            },{
                className:'一年级二班',
                classId:2,
                percent:0.3
            },{
                className:'一年级三班',
                classId:3,
                percent:0.45
            },{
                className:'一年级四班',
                classId:4,
                percent:0.05
            },
        ]
    },{
        grade:2,
        percentList:[
            {
                className:'二年级一班',
                classId:1,
                percent:0.1
            },{
                className:'二年级二班',
                classId:2,
                percent:0.7
            },{
                className:'二年级三班',
                classId:3,
                percent:0.15
            },{
                className:'二年级四班',
                classId:4,
                percent:0.05
            },
        ]
    },{
        grade:3,
        percentList:[
            {
                className:'三年级一班',
                classId:1,
                percent:0.1
            },{
                className:'三年级二班',
                classId:2,
                percent:0.1
            },{
                className:'三年级三班',
                classId:3,
                percent:0.1
            },{
                className:'三年级四班',
                classId:4,
                percent:0.7
            },
        ]
    },{
        grade:4,
        percentList:[
            {
                className:'四年级一班',
                classId:1,
                percent:0.2
            },{
                className:'四年级二班',
                classId:2,
                percent:0.2
            },{
                className:'四年级三班',
                classId:3,
                percent:0.2
            },{
                className:'四年级四班',
                classId:4,
                percent:0.2
            },
        ]
    },
]
const zh_cn = ['一年级','二年级','三年级','四年级','五年级','六年级']
function Select() {
    const [arr,setArr] = useState([])
    const [select,setSelect] = useState({selecting:false,selectIndex:0,percentList:[]})
    const { selecting,selectIndex,percentList } = select
    useEffect(() => {
        setArr(data)
        if(percentList.length === 0 ){
            setSelect({...select,percentList:data[0].percentList})
        }
    },[select.selectIndex])
    return (
        <>
            <h1>筛选</h1>
            {
                arr.map( item => (
                    <li key={item.grade} onClick={()=>setSelect({selecting:false,selectIndex:item.grade,percentList:item.percentList})} className={`${styles['select-item']} ${ selecting&&selectIndex ? styles['active'] : '' }`}>{zh_cn[item.grade-1]}</li>
                ) )
            }
            
            { percentList && percentList.length > 0 && <Bar percentList={percentList} /> }
        </>
    )
}

Select.propTypes = {
    click1:PropTypes.func
}


export class Index extends Component {
    state = {
        arr:data,
        select:{selectIndex:data[0].grade,percentList:data[0].percentList}
    }

    render() {
        const { arr,select } = this.state
        const { selectIndex,percentList } = select
        return (
            <div className={styles['wrap']}>
                <h1>筛选</h1>
                {
                    arr.map( item => (
                        <li key={item.grade} 
                            onClick={()=>this.setState({select:{selectIndex:item.grade,percentList:item.percentList}})} 
                            className={`${styles['select-item']} ${ selectIndex === item.grade ? styles['active'] : '' }`}
                        >{zh_cn[item.grade-1]}</li>
                    ) )
                }
                
                { percentList && percentList.length > 0 && <Bar percentList={percentList} /> }
            </div>
        )
    }
}

export default Index
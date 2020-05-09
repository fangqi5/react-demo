/**
 * 名称：ppt组件
 * 参数：data:[]
 */
import React, { Component } from 'react'
import styles from './index.scss'
import PropTypes from 'prop-types'

export class PPT extends Component {
    state = {
        count:0,
        pic:this.props.data[0],
    }

    weelEvent = (e) => {
        let deltaY = e.nativeEvent.deltaY
        if(this.timer){
            return false
        }
        this.timer = setTimeout(() => {
            this.choosePic(deltaY)
            clearTimeout(this.timer)
            this.timer = null   
        }, 150);
    }

    componentWillUnmount(){
        clearTimeout(this.time)
    }

    choosePic = ( deltaY ) => {
        let ul = document.getElementById('ul')
        let el = ul.scrollTop
        const { data } = this.props
        const { count } = this.state
        const urlsNum = data.length
        let cur = count
        if(deltaY >= 0){
            if(cur + 1 < urlsNum ){
                cur++
            }
            this.setState({pic:data[cur],count:cur})
            ul.scrollTop = el + 150
        }else{
            if(cur >= 1 ){
                cur--
            }
            this.setState({pic:data[cur],count:cur})
            ul.scrollTop = el - 150
        }
        
    }

    setCurPic = ( index,pic ) => {
        this.setState({
            count:index,
            pic
        })
    }

    render() {
        const { pic,count } = this.state
        const { data } = this.props
        return (
            <>
                <ul id="ul">
                    {
                        data&&data.map((item,index)=>{
                            return (
                                <li key={item} onClick={()=>this.setCurPic(index,item)} className={`${ count === index ? styles['active'] : '' }`}><img src={item} /></li>
                            )
                        })
                    }
                </ul>
                <div className={styles['mainpic']} onWheel={this.weelEvent}>
                    <img src={pic} />
                </div> 
            </>
        )
    }
}

export default PPT

PPT.propTypes = {
    data:PropTypes.array
}

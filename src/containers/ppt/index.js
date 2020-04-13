import React, { Component } from 'react'
import styles from './index.scss'
import PPTC from './pptComponent' 
// import PropTypes from 'prop-types'

const urls = [
        require('ASSETS/curousel/durant.jpg'),
        require('ASSETS/curousel/Jame.jpg'),
        require('ASSETS/curousel/Kobe.jpg'),
    ]
const durls = [
        require('ASSETS/1.jpg'),
        require('ASSETS/2.jpg'),
        require('ASSETS/3.jpg'),
        require('ASSETS/4.png'),
        require('ASSETS/5.jpg'),
        require('ASSETS/6.jpg'),
    ]   
let count = 1
export class PPT extends Component {
    state = {
        pic:urls[0],
        index:0,
        showUrls:1
    }

    weelEvent = (e) => {
        e.preventDefault()
        let deltaY = e.nativeEvent.deltaY
        if(this.timer){
            return false
        }
        this.timer = setTimeout(() => {
            this.choosePic(deltaY)
            clearTimeout(this.timer)
            this.timer = null   
        }, 200);
    }

    choosePic = ( deltaY ) => {
        let ul = document.getElementById('ul')
        let el = ul.scrollTop
        let urlsNum = urls.length
        let durlsNum = durls.length
        if(count>urlsNum+durlsNum-1||count < 1){return false}
        if(deltaY >= 0){
            let cur
            if(count >=urlsNum){
                count++
                cur = count - urlsNum - 1
                this.setState({showUrls:2,pic:durls[cur],index:cur})
            }else{
                count++
                cur = count-1
                this.setState({showUrls:1,pic:urls[cur],index:cur})
            }
            ul.scrollTop = el + 150
        }else{
            let cur
            if(count >urlsNum){
                count--
                cur = count - urlsNum
                this.setState({showUrls:2,pic:durls[cur],index:cur})
            }else{
                count--
                cur = count
                this.setState({showUrls:1,pic:urls[cur],index:cur})
            }
            ul.scrollTop = el - 150
        }
        
        if(count >= urlsNum+durlsNum){
            count = urlsNum+durlsNum-1
        }
        if(count <= 0){
            count = 1
        }
        
        console.log('count-----',count)
    }

    setCurPic = ( status,index,pic ) => {
        if(status === 1){
            count = index+1
        }else{
            count = index+4
        }
        this.setState({
            showUrls:status,
            index,
            pic
        })
    }

    render() {
        // const { pic,showUrls,index } = this.state
        return (
            <div className={styles['content']}>
                <PPTC data={durls} />
                {/* <ul id='ul'>
                    {
                        urls.map((item,index1)=>{
                            return (
                                <li key={item} onClick={()=>this.setCurPic(1,index1,item)} className={`${ showUrls === 1 && index ===index1 ? styles['active'] : '' }`}><img src={item} /></li>
                            )
                        })
                    }
                    {
                        durls.map((item1,index2)=>{
                            return (
                                <li key={item1} onClick={()=>this.setCurPic(2,index2,item1)} className={`${ showUrls === 2 && index ===index2 ? styles['active'] : '' }`}><img src={item1} /></li>
                            )
                        })
                    }
                </ul>
                <div className={styles['mainpic']} onWheel={this.weelEvent} tabIndex={1}>
                    <img src={pic} />
                </div> */}
            </div>
        )
    }
}

export default PPT

import React, { Component } from 'react'
import styles from './index.scss'
import pic1 from '../../../assets/curousel/durant.jpg'
import pic2 from '../../../assets/curousel/Jame.jpg'
import pic3 from '../../../assets/curousel/Kobe.jpg'
// import PropTypes from 'prop-types'
let curPicIndex = 1
let translateX = 0
export class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgs:[
                pic1,pic2,pic3,pic1
            ],
            num:[1,2,3],
            curPicIndex : 1
        }
    }

    componentDidMount(){
        this.action()
    }

    action = () => {
        console.log(111)
        let li = document.querySelectorAll('li')
        let point = document.querySelectorAll('.secPoints')
        if(translateX !== 200*curPicIndex){
            li.forEach( item =>{
                item.style.transform = `translateX(${ -translateX + 'px' })`
            } )
            translateX = translateX + 1
            window.cancel =  requestAnimationFrame(this.action)
        }else{
            curPicIndex = curPicIndex + 1
            this.time1 = setTimeout(() => {
                if(curPicIndex > 3 ){
                    curPicIndex = 1 
                    translateX = 0
                    window.cancel = requestAnimationFrame(this.action)
                }else{
                    translateX = translateX + 1
                    window.cancel = requestAnimationFrame(this.action)
                }
            }, 1000);
        }
        point.forEach( (dom,cur) =>{
            if(cur + 1 === curPicIndex){
                dom.style.backgroundColor = 'red'
            }else{
                dom.style.backgroundColor = 'blue'
            }
        })

        if(curPicIndex === 4){
            point[0].style.backgroundColor = 'red'
        }
            
    }

    switch = () => {
        console.log(222)
        cancelAnimationFrame(window.cancel)
    }

    switchLeft = () => {
        console.log(window.cancel)
        window.cancel = requestAnimationFrame(this.action)
    }

    render(){
        const { imgs,num } = this.state
        return (
            <div className={styles['curousel']}>
                <ul className={styles['view']}>
                {
                    imgs.map((item,index)=>{
                        return (
                            <li key={index}>
                                <img src={ item } />
                            </li>
                        )
                    })
                }
                <div className={`${ styles['left-btn'] }`} onClick={ this.switchLeft }>
                    <i className={` iconfont iconzuojiantou-copy `} ></i>
                </div>
                <div className={`${ styles['right-btn'] }`} onClick={ this.switch }>
                    <i className={` iconfont iconyoujiantou-copy `}></i>
                </div>
                { 
                    num.map((blank,num)=>{
                        return (
                            <span key={num} style={{ left:80 + num * 20 + 'px'}} className={`secPoints ${styles['point']}`}></span>
                        )
                    }) 
                }
                </ul>
            </div>
        )
    }
}

export default Carousel

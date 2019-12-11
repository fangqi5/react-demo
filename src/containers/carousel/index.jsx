import React, { Component } from 'react'
import styles from './index.scss'
import pic1 from '../../assets/curousel/durant.jpg'
import pic2 from '../../assets/curousel/Jame.jpg'
import pic3 from '../../assets/curousel/Kobe.jpg'
// import PropTypes from 'prop-types'
let curPicIndex = 1
// let duration = 5
let translateX = 0
export class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgs:[
                pic1,pic2,pic3,pic1
            ],
            curPicIndex : 1
        }
    }

    componentDidMount(){
        this.action()
        // window.addEventListener('')
    }

    action = () => {
        let li = document.querySelectorAll('li')
        if(curPicIndex <= 3){
            if(translateX != 200*curPicIndex){
                li.forEach( item =>{
                    item.style.transform = `translateX(${ -translateX + 'px' })`
                } )
                translateX = translateX + 1
                requestAnimationFrame(this.action)
            }else{
                
                setTimeout(() => {
                    if(curPicIndex ===3 && translateX === 200 * curPicIndex){
                        translateX = 0
                        li.forEach( item =>{
                            item.style.transform = `translateX(${ -translateX + 'px' })`
                        } )
                        curPicIndex = 1
                        translateX = translateX + 1
                        requestAnimationFrame(this.action)
                    }else{
                        translateX = translateX + 1
                        requestAnimationFrame(this.action)
                    }
                }, 1000);
            }
            translateX <= 200*curPicIndex ? '' : curPicIndex = curPicIndex + 1
        }
    }

    render(){
        const { imgs } = this.state
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
                </ul>
            </div>
        )
    }
}

export default Carousel

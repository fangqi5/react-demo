import React, { Component } from 'react';
import styles from './index.scss'
import collect from '../../assets/cinema/collect.png'
import collected from '../../assets/cinema/collected.png'
import success from '../../assets/cinema/success.png'
import axios from 'axios'

const Headers = () => {
    return (
        <header>
            <h2>哪吒-魔童降世(3D)</h2>
            <h3>滨江区西兴街道江陵路星耀城二期</h3>
        </header>
    )
}

const Footer = () => {
    return (
        <footer>
            <ul className={styles['selected']}></ul>
            <div className={styles['confirmBtn']}>请先选座</div>
        </footer>
    )
}

class Cinema extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:null,
            IMAGE_HEIGHT:50,
            IMAGE_WIDTH:50,
            selectId:[],
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get('/api/getSeatInfo').then((json)=>{
            this.setState({
                data:json.data
            },()=>{
                const { IMAGE_HEIGHT,IMAGE_WIDTH } = this.state
                let canvasDom = document.createElement('canvas')
                canvasDom.width = IMAGE_WIDTH * 21
                canvasDom.height = IMAGE_HEIGHT * 6
                canvasDom.id = 'canvas'
                canvasDom.onclick = this.choose
                let middle = document.getElementById('middle')
                middle.appendChild(canvasDom)
                this.createImg()
            })
        })
    }

    createImg = () => {
        const NoSelectImg = document.createElement('img')
        const SelectImg = document.createElement('img')
        const IsSoldImg = document.createElement('img')
        let count = 0
        this.ctx = document.getElementById('canvas').getContext('2d');
        const loadCallback = () =>{
            count++
            if(count === 3){
                this.NoSelectImg = NoSelectImg
                this.SelectImg = SelectImg
                this.IsSoldImg = IsSoldImg
                this.darwImageIntoCanvas()
            }
        }
        NoSelectImg.onload = loadCallback
        SelectImg.onload = loadCallback
        IsSoldImg.onload = loadCallback

        NoSelectImg.src=collect
        SelectImg.src=collected
        IsSoldImg.src=success
    }

    darwImageIntoCanvas = () => {
        const { IMAGE_HEIGHT,IMAGE_WIDTH,selectId,data } = this.state
        data.forEach(item => {
            const offsetX = (item.x - 1)*IMAGE_WIDTH
            const offsetY = (item.y - 1)*IMAGE_HEIGHT
            if(item.isSold){
                this.ctx.drawImage(this.IsSoldImg,offsetX,offsetY,IMAGE_HEIGHT,IMAGE_WIDTH)
            }else{
                if(selectId.includes(item.id)){
                    this.ctx.drawImage(this.SelectImg,offsetX,offsetY,IMAGE_HEIGHT,IMAGE_WIDTH)
                }else{
                    this.ctx.drawImage(this.NoSelectImg,offsetX,offsetY,IMAGE_HEIGHT,IMAGE_WIDTH)
                }
            }
        })
    }

    componentDidUpdate(){
        if(this.ctx&&this.state.data){
            const { IMAGE_HEIGHT,IMAGE_WIDTH,data } = this.state
            this.ctx.clearRect(0,0,IMAGE_WIDTH * data[data.length - 1].x,IMAGE_HEIGHT * 6)
            this.darwImageIntoCanvas()
        }
        
    }

    choose = (e) => {
        let { selectId,data } = this.state
        const offsetTop = document.getElementById('canvas').offsetTop
        const scrollLeft = document.getElementById('middle').scrollLeft
        const clickX = Math.ceil((e.pageX + scrollLeft) / 50)
        const clickY = Math.ceil((e.pageY - offsetTop) / 50)
        let seatId = ''
        for (const item of data) {
            if(item.x ===clickX&&item.y===clickY){
                if(item.isSold){
                    return
                }else{
                    seatId = item.id
                }
            }
        }
        const index = this.state.selectId.indexOf(seatId)
        index > -1 ? selectId.splice(index,1) : selectId.push(seatId)
        this.setState({ selectId });
    }

    render() {
        const module = (
            <div className={styles['container']}>
                <Headers />
                <div className={styles['middle']} id='middle'></div>
                <Footer />
            </div>
        )
        return module;
    }
}

export default Cinema;
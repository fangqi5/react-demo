import React, { Component } from 'react';
import styles from './index.scss'
import collect from '../../assets/cinema/collect.png'
import collected from '../../assets/cinema/collected.png'
import success from '../../assets/cinema/success.png'
import data from './data.json'

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
        this.canvas = React.createRef()
        this.state = {
            IMAGE_HEIGHT:50,
            IMAGE_WIDTH:50,
            selectId:[],
        }
    }

    componentDidMount(){
        this.createImg()
        console.log(data)
    }

    createImg = () => {
        const NoSelectImg = new Image()//document.createElement('img')
        const SelectImg = new Image()//document.createElement('img')
        const IsSoldImg = new Image()//document.createElement('img')
        let count = 0
        this.ctx = this.canvas.current.getContext('2d');
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
        const { IMAGE_HEIGHT,IMAGE_WIDTH,selectId } = this.state
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
        const { IMAGE_HEIGHT,IMAGE_WIDTH } = this.state
        this.ctx.clearRect(0,0,IMAGE_WIDTH * data[data.length - 1].x,IMAGE_HEIGHT * 6)
        this.darwImageIntoCanvas()
    }

    choose = (e) => {
        let { selectId } = this.state
        const offsetTop = this.canvas.current.offsetTop
        const clickX = Math.ceil(e.pageX / 50)
        const clickY = Math.ceil((e.pageY - offsetTop) / 50)
        let seatId = ''
        data.forEach( item => {
            if(item.x ===clickX&&item.y===clickY){
                // throw new console.error('end----');
                if(item.isSold){
                    throw new console.error('end----');
                }else{
                    seatId = item.id
                }
                
            }
        } )
        const index = this.state.selectId.indexOf(seatId)
        index > -1 ? selectId.splice(index,1) : selectId.push(seatId)
        this.setState({ selectId });
    }

    render() {
        const { IMAGE_HEIGHT,IMAGE_WIDTH } = this.state
        const module = (
            <div className={styles['container']}>
                <Headers />
                <div className={styles['middle']}>
                    <canvas width={ IMAGE_WIDTH * data[data.length - 1].x } height={IMAGE_HEIGHT * 6} onClick={this.choose} ref={this.canvas} ></canvas>
                </div>
                <Footer />
            </div>
        )
        return module;
    }
}

export default Cinema;
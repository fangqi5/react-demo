import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Canvas extends Component {

    componentDidMount(){
        this.renderCanvas()
    }

    renderCanvas = () => {
        const cc=document.getElementById("canvas_1"); 
        if(cc.getContext){ 
            // const width = 400
            // const height = 400
            const ctx=cc.getContext("2d"); 
            // ctx.lineWidth = 3; //线条的粗细
            // ctx.strokeStyle = '#f00';

            // ctx.beginPath();
            
            // ctx.moveTo(0,0)
            // ctx.lineTo(0,height)

            // ctx.moveTo(0,0)
            // ctx.lineTo(width,0)

            // ctx.moveTo(0,height)
            // ctx.lineTo(width,height)

            // ctx.moveTo(width,0)
            // ctx.lineTo(width,height)

            // ctx.stroke()
            // ctx.closePath()
            // ctx.lineWidth = 10; 
            // ctx.beginPath(); 
            // ctx.moveTo(0,0); 
            // ctx.lineTo(0,height); 
            // ctx.stroke(); 
            ctx.strokeRect(315,315,100,100); 
            ctx.fillRect(340,340,50,50); 
            ctx.clearRect(350,350,30,30); 
            ctx.beginPath(); 
            ctx.moveTo(150,150); 
            ctx.lineTo(150,250); 
            ctx.lineTo(300,250); 
            ctx.fill(); 
            ctx.closePath();
            // for (var i=1;i<6;i++){ 
            //     for (var j=1;j<6;j++){ 
            //         ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)'; 
            //         ctx.fillRect(j*25,i*25,25,25); 
            //     } 
            // }
            // ctx.lineCap = 'round'
            // ctx.lineJoin = 'round'
            // ctx.strokeStyle="#e78170"; 
            // var linearGradient=ctx.createLinearGradient(50,50,250,250); 
            // linearGradient.addColorStop(0,'yellow'); 
            // linearGradient.addColorStop(.5,'red'); 
            // linearGradient.addColorStop(1,'green'); 
            // ctx.fillStyle=linearGradient; 
            // ctx.fillRect(50,50,200,200);
            // for (var m = 0; m < 10; m++){ 
            //     ctx.lineWidth = 1+m; 
            //     ctx.beginPath(); 
            //     ctx.moveTo(25+m*14,25); 
            //     ctx.lineTo(25+m*14,140); 
            //     ctx.stroke(); 
            // }
            // const text = '未试过'
            // ctx.fillText(text, 100, 100,[1000])
            // var img = new Image()
            // img.src='http://chuantu.xyz/t6/703/1573616710x1033347913.jpg'
            // img.addEventListener('load',()=>{
            //     ctx.drawImage(img,120,40,80,80,10,10,80,80); 
            // })
            // ctx.fillStyle="blue";
            // ctx.fillRect(0,0,100,100); 
            // ctx.save(); ctx.translate(60,60); 
            // ctx.fillStyle="red"; 
            // ctx.fillRect(0,0,100,100); 
            // ctx.restore();
        }
    }

    onMouseDown = () => {
        alert('1111111')
    }

    render() {
        return (
            <div className='container'>
                <canvas id="canvas_1" height="500" width="500" style={{border:'1px solid red'}}  onMouseDown={this.onMouseDown}>
                </canvas>
            </div>
        )
    }
}

export default Canvas

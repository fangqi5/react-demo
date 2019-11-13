import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Canvas extends Component {

    componentDidMount(){
        this.renderCanvas()
    }

    renderCanvas = () => {
        var cc=document.getElementById("canvas_1"); 
        if(cc.getContext){ 
            var cxt=cc.getContext("2d"); 
            // cxt.strokeRect(315,315,100,100); 
            // cxt.fillRect(340,340,50,50); 
            // cxt.clearRect(350,350,30,30); 
            // cxt.beginPath(); 
            // cxt.moveTo(150,150); 
            // cxt.lineTo(150,250); 
            // cxt.lineTo(300,250); 
            // cxt.fill(); 
            // cxt.closePath();
            // for (var i=1;i<6;i++){ 
            //     for (var j=1;j<6;j++){ 
            //         cxt.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)'; 
            //         cxt.fillRect(j*25,i*25,25,25); 
            //     } 
            // }
            // cxt.lineCap = 'round'
            // cxt.lineJoin = 'round'
            // cxt.strokeStyle="#e78170"; 
            // var linearGradient=cxt.createLinearGradient(50,50,250,250); 
            // linearGradient.addColorStop(0,'yellow'); 
            // linearGradient.addColorStop(.5,'red'); 
            // linearGradient.addColorStop(1,'green'); 
            // cxt.fillStyle=linearGradient; 
            // cxt.fillRect(50,50,200,200);
            // for (var m = 0; m < 10; m++){ 
            //     cxt.lineWidth = 1+m; 
            //     cxt.beginPath(); 
            //     cxt.moveTo(25+m*14,25); 
            //     cxt.lineTo(25+m*14,140); 
            //     cxt.stroke(); 
            // }
            // const text = '未试过'
            // cxt.fillText(text, 100, 100,[1000])
            // var img = new Image()
            // img.src='http://chuantu.xyz/t6/703/1573616710x1033347913.jpg'
            // img.addEventListener('load',()=>{
            //     cxt.drawImage(img,120,40,80,80,10,10,80,80); 
            // })
            cxt.fillStyle="blue";
            cxt.fillRect(0,0,100,100); 
            cxt.save(); cxt.translate(60,60); 
            cxt.fillStyle="red"; 
            cxt.fillRect(0,0,100,100); 
            cxt.restore();
        }
    }

    render() {
        return (
            <div className='container'>
                <canvas id="canvas_1" height='1080px' width='1920px'>
                </canvas>
            </div>
        )
    }
}

export default Canvas

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
            cxt.strokeRect(20,20,100,100); 
            cxt.fillRect(40,40,50,50); 
            cxt.clearRect(50,50,30,30); 
            cxt.beginPath(); 
            cxt.moveTo(150,150); 
            cxt.lineTo(150,250); 
            cxt.lineTo(300,250); 
            cxt.fill(); 
            cxt.closePath();
            cxt.quadraticCurveTo(12000, 12000, 15000, 15000)
            cxt.stroke()
            for (var i=1;i<6;i++){ 
                for (var j=1;j<6;j++){ 
                    cxt.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)'; 
                    cxt.fillRect(j*25,i*25,25,25); 
                } 
            }
        }
    }

    render() {
        return (
            <div className='container'>
                <canvas id="canvas_1" height='320px' width='320px'>
                </canvas>
            </div>
        )
    }
}

export default Canvas

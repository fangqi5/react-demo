import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'

export class Promises extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    testPromise = () =>{
        new Promise((resolve,reject)=>{
            axios.get('http://www.mocky.io/v2/5dc23b762f000069004bdedd').then(()=>{
                setTimeout(() => {
                    console.log('1',new Date)
                }, 1000);
            })
            reject()
            for(let j=0;j<1000;j++){
                if(j === 999){
                    console.log('j',new Date())
                }
            }
        }).then((json)=>{
            console.log('2',new Date)
            axios.get('http://www.mocky.io/v2/5dc23b762f000069004bdedd').then(()=>{
                setTimeout(() => {
                    console.log('5',new Date)
                }, 1000);
                console.log('4',new Date)
            })
            console.log('json',json)
            for(let i=0;i<1000;i++){
                if(i === 999){
                    console.log('i',new Date())
                }
            }
            console.log('6',new Date)
        }).then(()=>{
            console.log('3',new Date)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.testPromise}>测试Promise</button>
            </div>
        )
    }

}

export default Promises

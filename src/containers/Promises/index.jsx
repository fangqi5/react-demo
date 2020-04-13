import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


const ShowName = (props) => {
    // console.log(props)
    return <li>{props.name}</li>
}

ShowName.propTypes = {
    name:PropTypes.string
}

function ShowAge(props){
    const handleClick = () => {
        // setTimeout(function(){
        //     alert('Followed ' + props.name)
        // }, 2000);
        let arr =  function (a){ return console.log('Followed ' + a)}
        setTimeout(function(){
            showMessage(arr)
        },1000)
    };
    
    const showMessage = (func) => {
        func(props.name)
    }

    return <li onClick={()=>handleClick()}>{1111}</li>
}

ShowAge.propTypes = {
    age:PropTypes.number,
    name:PropTypes.string
}

class AlertName extends Component{

    showMessage = () => {
        alert('Followed ' + this.props.name);
      };
    
      handleClick = () => {
        setTimeout(this.showMessage, 3000);
        
      };
    
      render() {
        return <button onClick={this.handleClick}>Follow</button>;
      }
}

AlertName.propTypes = {
    name:PropTypes.string
}

export class Promises extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'苏三'
        }
    }

    componentDidMount(){
        // setInterval(()=>{
        //     this.setState((state,props)=>{
        //         console.log('state---',state,'props',props);
        //         return {name:'苏三'+new Date()}
        //     })
        // },1000)
        // },1000)
    }

    testPromise = () =>{
        new Promise(()=>{
            axios.get('http://www.mocky.io/v2/5dc23b762f000069004bdedd').then(()=>{
                setTimeout(() => {
                    console.log('1',new Date)
                }, 1000);
            })
            // reject()
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
                {/* <button onClick={this.testPromise}>测试Promise</button> */}
                练习函数组件
                <ShowName style={{color:'red'}} name={this.state.name} />
                <video controls="controls"   src={'http://codego.ltd/video/5fab9728cd74c1b45ea8fda783842488.MP4'}></video>
                <ShowAge age={10} name={'1'+this.state.name} />

                <AlertName name={this.state.name} />
            </div>
        )
    }

}


export default Promises


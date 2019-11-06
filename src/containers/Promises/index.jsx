import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'

export class Promises extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowNum:false
        }
    }
    static propTypes = {

    }

    testPromise = () =>{
        new Promise((resolve)=>{
            axios.get('http://www.mocky.io/v2/5dc23b762f000069004bdedd').then((json)=>{
                console.log(json,55)
            })
            resolve(console.log(1111))
        }).then(()=>{
            console.log(122222)
            this.setState({
                isShowNum:!this.state.isShowNum
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.testPromise}>11111</button>
                <span>{ this.state.isShowNum ? 2222 : '' }</span>
            </div>
        )
    }

}

export default Promises

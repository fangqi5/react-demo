import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'

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
            // axios('get','https://fangqi5/test').then((json)=>{
            //     console.log(json)
            // })
            resolve(console.log(1111))
        }).then(()=>{
            console.log(122222)
            this.setState({
                isShowNum:!this.state.isShowNum
            })
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

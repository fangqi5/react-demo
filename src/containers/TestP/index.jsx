import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'

export class Promise extends Component {
    static propTypes = {

    }

    testPromise = () =>{
        console.log(222)
        new Promise(()=>{
            console.log(111111)
        }).then(()=>{
            console.log(333)
        })
        // axios('get','https://fangqi5/test').then((json)=>{
        //     console.log(json)
        // })
    }

    render() {
        return (
            <div>
                { this.testPromise() }
                111
            </div>
        )
    }
}

export default Promise

import React, { Component } from 'react'
import config from './mock'
// import PropTypes from 'prop-types'
export class MockData extends Component {

    componentDidMount(){
        console.log(config)
    }
    render() {
        return (
            <ul className='ul'>
                {   
                    config.map( (item,index) => {
                        return(
                            <li key={index}>
                                {
                                    item.list.map( (dataList,index1) => {
                                        return (
                                            <li key = { index1 } >{ JSON.stringify(dataList) }</li>
                                        ) 
                                    })
                                }
                            </li>
                        )
                    }
                    ) 
                }
            </ul>
        )
    }
}

export default MockData

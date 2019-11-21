import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routerConfig from 'ROUTER/config'
export class Home extends Component {

    static propTypes = {
        history:PropTypes.object
    }

    goPage = (index) =>{
        this.props.history.push(index)
    }

    render() {
        return (
            <div>
                {
                    routerConfig.map( item =>  (
                            <div key={item.path} onClick={()=>this.goPage(item.path)}>去{item.path}页面</div>
                        )
                    )
                }
            </div>
        )
    }
}

export default Home

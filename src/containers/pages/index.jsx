import React, { Component } from 'react'
import styles from './index.scss'
import config from './data'
// import PropTypes from 'prop-types'
export class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            config:config.splice(0,10)
        }
    }
    componentDidMount(){
        
    }

    render() {
        const { config } = this.state
        const module = (
                <div className={styles['container']}>
                    <div className={styles['header']}>以下为分页内容</div>
                    <ul>
                        {
                            config.map((item,index)=>{
                                return (
                                    <li key={index}>{index + item.value }222</li>
                                )
                            })
                        }
                    </ul>
                </div>
        )

        return module;
    }
}

export default Pages

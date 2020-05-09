import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.scss'

export class ApplyHandle extends Component {
    static propTypes = {
        children:PropTypes.object,
        visiable:PropTypes.bool
    }

    componentDidMount(){
        
    }

    createContainer = () => {
        this.container = document.createElement('div')
    }

    render() {
        const module = (
            <div className={styles['container']} style={{display:this.props.visiable ? 'block' : 'none'}}>
                <div className={styles['content']}>
                    { this.props.children }
                </div>
            </div>
        )

        return module;
    }
}

export default ApplyHandle

import React, { Component } from 'react'
import styles from './index.scss'
import First from './first'
import Second from './second'
// import PropTypes from 'prop-types'

export class index extends Component {

    render() {
        return (
            <div className={styles['carouselContainer']}>
                <span>第一阶段实现</span>
                <First />
                <span>第二阶段实现</span>
                <Second />
            </div>
        )
    }
}

export default index

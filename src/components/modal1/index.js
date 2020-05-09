import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styles from './index.scss' ;

export class Modal extends Component {
    static propTypes = {

    }

    componentDidMount(){
        this.initContainer()
    }

    initContainer = () => {
        this.modal = document.createElement('div')
        document.getElementById('root').appendChild(this.modal)
        this.forceUpdate()
    }

    componentWillUnmount(){
        this.destroy()
    }

    destroy = () => {
        if(this.modal){
            this.modal.parentNode.removeChild(this.modal)
        }
    }

    render() {
        const modal = (
            <div className={styles['modal']}>
                <div className={styles['modal-fixed']}>
                    <label className={styles['modal-label']}>这是测试</label>
                </div>
            </div>
        )
        if(this.modal){
            return ReactDOM.createPortal(modal,this.modal)
        }
        return null
    }
}

export default Modal

import React, { Component } from 'react'
import ApplyHandle from 'COMPONENTS/modal'
import styles from './index.scss'

export class LearnReact extends Component {
    constructor(props){
        super(props);
        this.state = {
            visiable:false
        }
    }

    close = () =>{
        this.setState({
            visiable:false
        })
    }

    show = () =>{
        this.setState({
            visiable:true
        })
    }

    render() {
        const { visiable } = this.state
        const module = (
            <div className={styles['container']}>
                <div onClick={this.show}>测试弹窗</div>
                <ApplyHandle visiable={visiable}>
                    <div className={styles['wrap']}>
                        <div className={styles['title']}>
                            这是一个弹窗
                        </div>
                        <div className={styles['btns']}>
                            <div className={styles['applyBtn']} onClick={this.close}>取消</div>
                            <div className={styles['applyBtn']} onClick={this.close}>确定</div>
                        </div>
                    </div>
                </ApplyHandle>
            </div>
        )
        return module;
    }
}

export default LearnReact

import React, { Component,Fragment } from 'react'
import ApplyHandle from 'COMPONENTS/modal'
import styles from './index.scss'

export class LearnReact extends Component {
    constructor(props){
        super(props);
        this.state = {
            visiable:false
        }
        this.ref = React.createRef();
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

    input = () =>{
        console.log(this.ref.current.value)
    }

    render() {
        const { visiable } = this.state
        const modal = (
            <Fragment>
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
            </Fragment>
        )


        const module = (
            <div className={styles['container']}>
                <input placeholder="这是一个输入框" ref={this.ref} onChange={this.input} />
                { modal }
            </div>
        )
        return module;
    }
}

export default LearnReact

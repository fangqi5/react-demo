import React, { Component,Fragment } from 'react'
import ApplyHandle from 'COMPONENTS/modal'
import styles from './index.scss'
import axios from 'axios'

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

    queryData = () => {
        axios.post('/api/addStuIndo',{ id:10,name:'luochougou1',age:161 }).then((json)=>{
            console.log(json)
        })
    }

    updateQuery = () => {
        axios.post('/api/updateStuIndo',{ id:10,name:'l',age:11 }).then((json)=>{
            console.log(json)
        })
    }

    delQuery = () => {
        axios.post('/api/delStuIndo',{ id:9 }).then((json)=>{
            console.log(json)
        })
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
                <button onClick={this.addQuery}>点击按钮新增</button>
                <button onClick={this.updateQuery}>点击按钮更新</button>
                <button onClick={this.delQuery}>点击按钮删除</button>
            </div>
        )
        return module;
    }
}

export default LearnReact

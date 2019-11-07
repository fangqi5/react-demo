import React, { Component } from 'react'
import styles from './index.scss'
import PropTypes from 'prop-types'


export class Pagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalPage:(Math.ceil(this.props.totalCount/10)),
            totalNum:0,
            curPage:1,
            data:[...props.data],
            inputValue:'',
            showBtn:0,
            left:-35
        }
        this.btn = React.createRef()
    }

    componentDidMount(){
        if(this.props.totalCount){
            this.addElement(this.state.totalPage)
        }
    }

    addElement = (value) => {
        let element = []
        let pageCode = 0
        if(value > 12){
            pageCode === 1
        }
        for(let i=1;i<= value;i++){
            if(value>15&&i>12){
                i< (value - 1) ? ( i ===( value - 2 ) ? element.push('...') :'' ) : element.push(i)
            }else{
                element.push(i)
            }
            
        }
        this.setState({
            totalNum:element
        })
    }

    choosePage = (type,value) =>{
        let { curPage,totalPage } = this.state
        switch(type){
            case 1 : 
                if(curPage > 1){
                    this.setState({ curPage:curPage - 1 })
                }else{
                    return
                }
                break;
            case 2 :
                if(curPage !== value){
                    this.setState({ curPage:value })
                }else{
                    return
                }
                break;
            case 3 : 
                if(curPage < totalPage ){
                    this.setState({ curPage:curPage + 1 })
                }else{
                    return
                }
                break;
        }
        setTimeout(()=>{ 
            this.props.callback([...this.state.data].splice( ( this.state.curPage - 1 ) * 10 , 10 )) 
        },10)
    }

    inputPage = (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }

    showBtn = (value) => {
        this.setState({
            showBtn:value
        })
        value === 1 ? this.fadeOut() : this.fadeIn()
        
    }

    fadeOut = () => {
        let { left } = this.state
        if(left < 0 ){
            this.setState({
                left:left + 1
            },()=>{ 
                this.btn.current.style.left = (left + 1)+'px'
                this.fadeOuts = requestAnimationFrame(this.fadeOut)
            })
        }else{
            cancelAnimationFrame(this.fadeOuts)
        }
    }

    fadeIn = () => {
        let { left } = this.state
        if(left > -35 ){
            this.setState({
                left:left - 1
            },()=>{ 
                this.btn.current.style.left = (left - 1)+'px'
                this.fadeIns = requestAnimationFrame(this.fadeIn)
            })
        }else{
            cancelAnimationFrame(this.fadeIns)
        }
    }

    toPage = () => {
        let { inputValue,totalPage } = this.state
        if(inputValue > 0&&inputValue <= totalPage){
            this.props.callback([...this.state.data].splice( ( this.state.inputValue - 1 ) * 10 , 10 ))
            this.setState({
                curPage:inputValue
            })
        }else if(inputValue > 0&&inputValue > totalPage){
            this.props.callback([...this.state.data].splice( ( this.state.totalPage - 1 ) * 10 , 10 ))
            this.setState({
                curPage:this.state.totalPage
            })
        } else{
            this.props.callback([...this.state.data].splice( 0 , 10 ))
            this.setState({
                curPage:1
            })
        }
    }

    render() {
        const { totalNum,curPage,data,totalPage,inputValue} = this.state
        return (
            <div className={styles['container']}>
                <a href="javascripts:void(0)" className={`iconfont`} onClick={()=>this.choosePage(1,1)} >&#xe659;</a>
                {
                    totalNum&&totalNum.map((item,index)=>{
                        return (
                            <span key={index} className={`${curPage - 1 === index ? `${styles['active']}` : '' }`} onClick={()=>this.choosePage(2,index + 1 )} >{ item }</span>
                        )
                    })
                }
                <a href="javascripts:void(0)" className={`iconfont`} onClick={()=>this.choosePage(3,1)} >&#xe65b;</a>
                <div className={styles['detail']}>共{totalPage}页,{data.length}条数据,去</div>
                <input type='number' maxLength={totalPage} value={inputValue} 
                    onChange={this.inputPage} 
                    onFocus={()=>this.showBtn(1)} 
                    onBlur={()=>this.showBtn(2)} 
                />
                <div className={styles['btnWrap']}>
                    <div className={styles['cover']} ref={this.btn}>
                        <div className={`${styles['confirmBtn']} `} id="btn" 
                            onClick={this.toPage}
                        >确定</div>
                        <b>页</b>
                    </div>
                </div>
            </div>
        )
    }
}

Pagination.propTypes = {
    totalCount:PropTypes.number,
    data:PropTypes.array,
    callback:PropTypes.func
}

export default Pagination

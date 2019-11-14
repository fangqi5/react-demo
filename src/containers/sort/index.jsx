import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[ 7,1,5,68,4,86,12,65,3,102,1000,44,2,56,8644,1,6,5 ]
        }
    }

    //冒泡排序
    fastSort = () => {
        let { data } = this.state
        console.log(data)
        let c;
        for(let i=0;i<data.length - 1;i++){
            for(let j=0;j<data.length - 1;j++){
                if(data[j] > data[j + 1 ] ){
                    c = data[j]
                    data[ j ] = data[ j+1 ]
                    data[ j+1 ] = c 
                }
            }
        }
        this.setState({data},()=>{
            console.log(this.state.data)
        })
    }

    //插入排序
    insertSort = () => {
        let { data } = this.state
        console.log(data)
        let c;
        for(let i=1;i<data.length;i++){
            for(let j=i;j>=0;j--){
                if(data[j] < data[j-1]){
                    c = data[j] 
                    data[j] = data[j-1]
                    data[j-1]= c
                }
            }
        }
        this.setState({data},()=>{
            console.log(this.state.data)
        })
    }

    //选择排序
    selectSort = () => {
        let { data } = this.state
        console.log(data)
        let c = 0;
        let d;
        for(let i=0;i<data.length;i++){
            for(let j=i;j<data.length - 1;j++){
                if(data[j] < data[c]){
                    c = j
                }
            }
            d = data[i]
            data[i] = data[c]
            data[c] = d
        }
        this.setState({data},()=>{
            console.log(this.state.data)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.fastSort}>点击开始冒泡排序</button>
                <br /> <br />
                <button onClick={this.insertSort}>点击开始插入排序</button>
                <br /> <br />
                <button onClick={this.selectSort}>点击开始选择排序</button>
            </div>
        )
    }
}

export default Sort

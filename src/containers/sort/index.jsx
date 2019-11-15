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
            for(let j=0;j<data.length - 1;j++){ //从第一个元素开始依次往后对比，在倒数第二个元素对比结束后，最后一个元素应该也是最大的，所以循环次数为数组长度 - 1
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
        for(let i=1;i<data.length;i++){ //由于第一个默认是已排序元素，排序方式为从第二个元素开始依次向前比较，所以循环次数为数组长度 - 1
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
        let d;
        for(let i=0;i<data.length;i++){
            let c = i;
            for(let j=i;j<data.length;j++){ //关于内层循环的次数，选择排序是要从第一个开始到最后一个，所以循环次数要等于数组长度
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

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

function global(){
    console.log('global')
}

export class AboutThis extends Component {
    constructor(props){
        super(props)
        this.name = 'john'
        this.callTest = this.callTest.bind(this)
        this.applyTest = this.applyTest.bind(this)
        this.bindTest = this.bindTest.bind(this)
    }

    names(){
        console.log(this)
        console.log(this.name)
        //测试使用call借用其他对象的方法
        console.log(arguments,Array.prototype.push.call(arguments,5),arguments)
        /* 
            注：借用 Array.prototype.push 方法的对象还要满足以下两个条件
            1、对象本身要可以存取属性
            2、对象的 length 属性可读写。
        */
    }

    callTest(){
        let callObject = {
            name:'susan'
        }
        global()
        this.names() //this指向window
        this.names.call(callObject) //this指向callObject对象
        //测试使用call借用其他对象的方法
        this.names(1,2,3,4)
    }

    applyTest(){
        let callObject = {
            name:'susan'
        }
        this.names() //this指向window
        this.names.apply(callObject) //this指向callObject对象
    }

    bindTest(){
        let callObject = {
            name:'susan'
        }
        this.names() //this指向window
        this.names.bind(callObject)() //this指向callObject对象,bind用法稍特殊一点，返回的是一个函数，想要测试出效果可以将返回的函数成为自执行函数
    }

    /* 箭头函数验证版，实测脑子瓦特了 */
    // callTest = () => {
    //     let array = [ 0,1,2]
    //     /*已验证可用 */
    //     // this.names.call(this,'john')
    //     // let array = [1,2,3,4]
    //     console.log(Array.prototype.slice.call(array,(0,2)),array)
    //     /* 分割线 */
    //     // this.names()//输出john
    //     this.names.call(array)
    //     // this.names.call(this.arraySlice,...array)
    // }


    // applyTest = () => {
    //     /* 已验证可用 */
    //     // let array = [1,2,3,4]
    //     // console.log(Array.prototype.slice.apply(array,[(0,2)]),array)
    //     /* 分割线 */
    // }

    // bindTest = () => {
    //     let array = [1,2,3,4]
    //     console.log(this.names,array)
    // }
    /* 分割线 */

    render() {
        return (
            <div>
                <button onClick={ this.callTest }>点击使用call</button>
                <button onClick={ this.applyTest }>点击使用apply</button>
                <button onClick={ this.bindTest }>点击使用bind</button>
            </div>
        )
    }
}

export default AboutThis

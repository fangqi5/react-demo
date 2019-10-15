import React, { Component } from 'react'
import { HashRouter as Router, Route ,Switch  } from 'react-router-dom';//切换HashRouter和BrowserRouter只需切换as前的参数
import routerConfig from './config';
// import '../style/assemble.css'
//关于HashRouter和BrowserRouter，使用BrowserRouter每次改变路由时，会向服务器发送请求；而HashRouter会在路径上添加#/，#/后面的所有都不会发送到服务器端，路由切换在前端完成。
//HashRouter中内置方法很多，操作url会更方便
// 整理：
// HashRouter：当我们有不需要后端的小型客户端应用程序时，我们可以使用，HashRouter因为当我们在URL /位置栏中使用哈希时，浏览器不会发出服务器请求。
// BrowserRouter：当我们有支持后端的大规模生产就绪应用程序时，建议使用<BrowserRouter>。

export class BaseRouter extends Component {

    render() {
        return (
            <Router> 
                <Switch>
                    {
                        routerConfig.map((item,index)=>{
                            const { path, component, exact } = item;
                            return (
                                <Route
                                    key = { index }
                                    path = { path }
                                    component = { component }
                                    exact = { exact }
                                />
                            )
                        })
                    }
                </Switch>
            </Router>
        )
    }
}

export default BaseRouter

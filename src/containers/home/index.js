import React, { Component } from 'react'
import PropTypes from 'prop-types'

const config = [
    { name : 'home' },
    { name : 'Antv' },
    { name : "Echarts" },
    { name : "learnReact" },
    { name : "Promise" },
    { name : "pages" },
    { name : "canvas" },
    { name : "sort" }
]
export class Home extends Component {

    static propTypes = {
        history:PropTypes.object
    }

    goPage = (index) =>{
        let data = ''
        switch(index){
            case 0 :
                data = './'
                break;
            case 1 :
                data = './antv'
                break;
            case 2 :
                data = './echarts'
                break;
            case 3 :
                data = './learnReact'
                break;
            case 4 : 
                data = './promise'
                break;
            case 5 : 
                data = './pages'
                break;
            case 6 : 
                data = './canvas'
                break;
            case 7 : 
                data = './sort'
                break;
            default :
                data = './'
        }
        
        this.props.history.push(data)
    }

    render() {
        return (
            <div>
                {
                    config.map((item,index) => {
                        return (
                            <div key={item.name} onClick={()=>this.goPage(index)}>去{item.name}页面</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home

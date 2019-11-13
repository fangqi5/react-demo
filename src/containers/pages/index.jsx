import React, { Component } from 'react'
import styles from './index.scss'
import config from './data'
import Pagination from './Pagination'
// import PropTypes from 'prop-types'
export class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataList:[...config].splice(0,10)
        }
    }

    setDataList = (value) => {
        this.setState({
            dataList:value
        })
    }
    render() {
        const { dataList } = this.state
        const module = (
                <div className={styles['container']}>
                    <div className={styles['header']}>以下为分页内容</div>
                    <ul>
                        {
                            dataList.map((item,index)=>{
                                return (
                                    <li key={index}>{index + item.value }222</li>
                                )
                            })
                        }
                    </ul>
                    <Pagination totalCount={config.length} data={config} callback={this.setDataList} />
                </div>
        )

        return module;
    }
}

export default Pages

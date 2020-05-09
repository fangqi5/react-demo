import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Player from 'griffith'
import styles from './index.scss'

const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
  }

export class Video extends Component {
    constructor(props){
        super(props);
        this.video = React.createRef()
    }

    componentDidMount(){
        console.log(this.video)
    }

    componentDidUpdate(){
        console.log(this.video)
    }

    render() {
        return (
            <div className={styles['video']}>
                <Player ref={this.video} {...this.props} sources={sources} />
            </div>
        )
    }
}

export default Video

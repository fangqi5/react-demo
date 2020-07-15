import React, { Component } from 'react';
import ChilmeeMobilePlayer from 'chimee-mobile-player'
import 'chimee-mobile-player/lib/chimee-mobile-player.browser.css'

export class CourseDetail1 extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.player = new ChilmeeMobilePlayer({
            wrapper: '#mse',  // video dom容器
            src: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
            controls: true,
            playsinline: true,
            preload: 'auto',
            fluid:true,
            'x5-video-player-type': 'h5',
            'x5VideoPlayerFullscreen': true,
            'x5VideoOrientation': 'landscape',
            'xWebkitAirplay': true,
        });
    }

    render() {
        return (
            <div>
                <div id='mse' style={{ width:'100%',height:'100%' }}></div>
            </div>
        )
    }
}

export default CourseDetail1

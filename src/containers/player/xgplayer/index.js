import React, { Component } from 'react';
import Player from 'xgplayer';

export class CourseDetail1 extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.player = new Player({
            id: 'mse',
            fluid:true,
            playsinline: true,
            'webkit-playsinline':true,
            url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
            'x5-video-player-type': 'h5',
            'x5-video-player-fullscreen': true,
            'x5-video-orientation': 'portrait',
            'x5-playsinline':true,
            'x5-video-ignore-metadata':true
        });
        this.player.on('requestFullscreen',this.roateEvent)
    }

    roateEvent = () => {
        console.log(this.player.video)
        this.player.video.style.transform = 'rotate(90deg)'
    }

    render() {
        return (
            <div>
                <div id='mse' ref={ ref=>this.ref=ref }></div>
            </div>
        )
    }
}

export default CourseDetail1

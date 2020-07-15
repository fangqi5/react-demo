import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import { removeClass } from 'UTILS/tools';
// import "videojs-contrib-hls";
// import "videojs-flash";
// import * as videojsSwf from 'videojs-swf/dist/video-js.swf';
import './index.css';
const prefix = 'luv-video';
const defaultOptions = {
    controls: true,
    error:true,
    fluid:true,
    // notSupportedMessage: '无法播放该视频格式！',
    // techOrder: [ 'html5','flash' ],
    controlBar:{
        children: [
            'playToggle',
            'currentTimeDisplay',
            // 'timeDivider',
            'progressControl',
            'durationDisplay',
            // 'fullscreenToggle'
        ]
    }
}
export default class VideoPlayer extends React.Component {
    constructor(props){
        super(props);
        this.video = React.createRef();
        this.seeking = false;
        this.seekTime = 0
        this.state = {
            errText:'',
            isFullscreen:false
        }
	}
	
    componentDidMount() {
        const videoNode = this.video.current;
        const { videoJsOptions,playerRef,...rest } = this.props;
        //装载视频配置
        this.player = videojs(videoNode, { ...defaultOptions,...videoJsOptions,rest });
        //向父组件传递播放器实例
        playerRef && playerRef(this.player)
        //监听缓冲事件
        this.player.ready( this.hlsEvents )
        console.log(window.innerWidth,window.innerHeight)
    }
    
    hlsEvents = () => {
        const { videoJsOptions } = this.props;
        const that = this
        const d = document.querySelector(`.vjs-control-bar`)
        this.div = document.createElement('div')
        d.appendChild(this.div)
        this.div.className="vjs-fullscreen"
        this.div.innerHTML = `<button>全屏</button>`
        this.div.onclick=function(){
            const c = document.querySelector(`#player`)
            c.classList.add('videojs-fullscreen')
            const d = document.querySelector(`.${prefix}-player1`)
            d.style.width = `${window.innerHeight}px`;
            // d.style.position = 'fixed';
            // d.style.transform = 'rotate(90deg)';
            c.style.top = `${window.innerHeight/4.5}px`
            c.style.left = `-${window.innerWidth/2.6}px`
            d.style.height = `${window.innerWidth}px`;
        }
        // this.player.on('fullscreenchange',function(e){
        //     if(that.player.isFullscreen()){
        //         // const c = document.querySelector(`#player`)
        //         // const d = document.querySelector(`.${prefix}-player1`)
        //         // if(d.className.indexOf('vjs-fullscreen') > -1){
        //         //     removeClass(d,'vjs-fullscreen')
        //         //     console.log(d.className)
        //         // }
        //         // c.style.position = 'fixed';
        //         // c.style.top = 'transform(translateY(-50%)) translate3d(0, 0, 0)';
        //         // c.style.left = '50%';
        //         // c.style.transform = 'rotate(90deg)';
        //         // d.style.width = `${window.innerWidth}px`;
        //         // d.style.height = `${window.innerWidth}px`;
        //         // }, 100);

        //     }
        // })

        this.player.on('waiting',function(){
            that.handleCountNow()
        })

        this.player.on('pause',function(){
            if(this.seekTime !== 0 ){
                this.seekTime = 0
            }
            this.timer && clearInterval(this.timer)
        })
        
        this.player.on('play',function(){
            if(this.seekTime !== 0 ){
                this.seekTime = 0
            }
            this.timer && clearInterval(this.timer)
        })
    }

    handleCountNow = () => {
        this.timer = setInterval(()=>{
            if(this.seekTime < 10){
                this.seekTime++
            }else{
                this.seekTime = 0
                this.errorEvent('timeout')
            }
        },1000)
    }

    //组件销毁
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        const { isFullscreen } = this.state
        return (
            <div className={`${prefix}-player`} id="player" >
                <video 
                    ref={this.video} 
                    playsInline 
                    webkit-playsinline="true" 
                    x5-video-player-type = 'h5'
                    x5-video-player-fullscreen =  "true"
                    x5-video-orientation = 'landscape'
                    x5-playsinline="true" 
                    x5-video-ignore-metadata='true'
                    className={`${prefix}-player1 ${ isFullscreen ? 'videojs-fullscreen' : '' } video-js vjs-big-play-centered`}
                >
                </video>
            </div>
        )
    }
}

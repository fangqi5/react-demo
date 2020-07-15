import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import PropTypes from 'prop-types'

export default class VideoPlayer extends React.Component {
    constructor(props){
        super(props)
        videojs.player.addLanguage('zh-CN', {
            "You aborted the media playback": "视频播放被终止",
            "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
            "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
            "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
            "No compatible source was found for this media.": "无法找到此视频兼容的源。",
        });
        this.player = React.createRef();
    }
    componentDidMount() {
        const videoNode = this.player.current;
        this.player = videojs(videoNode,this.props);
        //videojs设置中文

        

        //添加监听事件
        let { videoEvent } = this.props;
        if(event){
            Object.keys(videoEvent).forEach(item => {
                this.player.on(item, () => {
                    videoEvent[item]()
                });
            });
        }
        console.log(this.props)
    }

    componentDidUpdate(prevProps){
        if(prevProps.option !== this.props.option ){
            this.props.option&&this.props.option.forEach( item => {
                if(item.trigger){
                    item.triggerFunction(this.player)
                }
            } )
        }
    }

    //组件销毁
    componentWillUnmount() {
        if(this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
        <div>	
            <div className="video">
            <video  ref={this.player} className="video-js vjs-big-play-centered"></video>
            </div>
        </div>
        )
    }
}

VideoPlayer.propTypes = {
    videoEvent:PropTypes.Object,
    option:PropTypes.array
}
import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import PropTypes from 'prop-types'

export default class VideoPlayer extends React.Component {
    constructor(props){
        super(props)
        this.player = React.createRef();
    }
    componentDidMount() {
        const videoNode = this.player.current;
        this.player = videojs(videoNode,this.props);

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
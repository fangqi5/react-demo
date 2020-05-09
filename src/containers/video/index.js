import React, { Component } from 'react'
import VideoPlayer from './videojs'
import styles from './index.scss'
// import PropTypes from 'prop-types'

const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid:true,
    sources: [{
        src: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
        type: 'video/mp4'
    }],
    controlBar:{
        volumePanel: {
            inline: false // 将音量控制条垂直
        },
    },
}

export class Video extends Component {
    state = {
        error:false,
        fullScreen:false,
        refresh:false
    }
    static propTypes = {

    }

    changeStatus = (value) => {
        switch(value){
            case 0:
                this.setState({fullScreen: true,refresh:false})
                break;
            case 1:
                this.setState({fullScreen: false,refresh:true})
                break;
        }
        this.timer =  setTimeout(() => {
            clearTimeout(this.timer)
            this.setState({fullScreen: false,refresh:false})
        }, 300);
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render() {
        const { error,fullScreen,refresh } = this.state
        return (
            <div className={styles['video']}>
                {
                    error ? <p style={{color:'red'}}>播放出错了------</p>
                    : (
                        <VideoPlayer { ...videoJsOptions }
                            videoEvent = {{
                                error:()=>{
                                    this.setState({error:true})
                                }
                            }}

                            option={
                                [
                                    {
                                        trigger:fullScreen,
                                        triggerFunction:(player)=>{
                                            player.requestFullscreen();
                                        }
                                    },
                                    {
                                        trigger:refresh,
                                        triggerFunction:(player)=>{
                                            player.load()
                                            player.play()
                                        }
                                    },
                                ]
                            }
                        />
                    )
                }
                <button onClick={()=>this.changeStatus(0)}>点我开始全屏</button>
                <button onClick={()=>this.changeStatus(1)}>点我开始刷新</button>
            </div>
        )
    }
}

export default Video

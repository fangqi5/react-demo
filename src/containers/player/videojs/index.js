import React, { Component } from 'react';
import VideoPlayer from 'COMPONENTS/video';

export class CourseDetail extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const sources = [{
            src:'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
            type:'video/mp4'
        }]
        return (
            <div>
                <VideoPlayer 
                    videoJsOptions={{sources}} 
                    playerRef={(ref)=>this.player = ref}
                />
            </div>
        )
    }
}

export default CourseDetail

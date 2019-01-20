import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //const videos = props.videos;

/*  for문처럼 length만큼 돔   
    var array = [1, 2, 3];
    array.map(function(number){return '<div>' + number + '</div'});
    결과 값 = {"<div>1</div", "<div>2</div", "<div>3</div"} 
    */
    const videoItems = props.videos.map((video) => {
        return(
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}/>
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {/* 클래스 컴포넌트로 변경했을 때 {props.videos.length}  props앞에 this.추가*/}
            {videoItems}
        </ul>
    );
};

export default VideoList;
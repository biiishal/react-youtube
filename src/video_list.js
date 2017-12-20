import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  var videoList = props.videos.map((video) => {
    return(
        <VideoListItem onVideoSelect={props.onVideoSelect} key={video.id} video={video} />
      )
  })
  return(
      <ul className="list-group">
        {videoList}
      </ul>
    )
}

export default VideoList;

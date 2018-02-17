import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return(<div>Loading....</div>);
  }
  console.log(video.description)
  const url = "https://www.youtube.com/embed/" + video.id;
  return(
      <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div>{video.title}</div>
          <div>{video.description}</div>
        </div>
      </div>
    )
}

export default VideoDetail;

import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return(<div>Loading....</div>);
  }
  console.log(video)
  const url = "https://www.youtube.com/embed/" + video.id;
  return(
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item" frameBorder="0" title={video.title} allowFullScreen></iframe>
      </div>
    )
}

export default VideoDetail;

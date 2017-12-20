import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img src={video.thumbnails.default.url} alt={video.title}/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{video.title}</h4>
          <p>{video.description.substring(0, 100) + "..."}</p>
        </div>
      </div>
    </li>
    )
}

export default VideoListItem;

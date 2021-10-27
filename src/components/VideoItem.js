import './VideoItem.css';
import React from 'react'

function VideoItem({ video, onVideoSelect }) {

   //console.log(video)

   return (

      // VIP. Posto metodot onVidesSelect ima parametar vo App kade e kreiran, koj treba da e videoto koe e kliknato , mora da go povikame preku arrow function so video kako parametar vnatre. 

      <div className="video-item item" onClick={() => onVideoSelect(video)}>
         <img
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
         />
         <div className="content">
            <div className="header">{video.snippet.title}</div>
         </div>
      </div>
   )
}

export default VideoItem

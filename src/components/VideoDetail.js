import React from 'react'




function VideoDetail({ selectedVideo }) {



   if (!selectedVideo) {
      return (
         <p>Loading...</p>
      )
   }

   //console.log(selectedVideo.snippet.title)

   return (
      <div>
         <div className="ui embed">
            <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title={selectedVideo.snippet.title} />
         </div>
         <div className="ui segment">
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
         </div>
      </div>
   )
}

export default VideoDetail

import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



function App() {


   const [videos, setVideos] = useState([]);
   const [selectedVideo, setSelectedVideo] = useState(null)



   const onTermSubmit = async (term) => {
      const response = await youtube.get('/search', {
         params: {
            q: term
         }
      });
      setSelectedVideo(response.data.items[0]) // za da pokaze odma prvoto video vo iframe-ot(da ne stoi prazno)
      setVideos(response.data.items);
   }


   useEffect(() => {
      onTermSubmit('metallica')
   }, [])



   const onVideoSelect = (video) => {
      console.log(video)
      setSelectedVideo(video)
   }

   // console.log(selectedVideo)
   // ________________________________________________________


   return (
      <div className='ui container'>
         {/* <SearchBar onFormSubmit={onTermSubmit} />
         <VideoDetail selectedVideo={selectedVideo} />
         <VideoList videos={videos} onVideoSelect={onVideoSelect} /> */}

         <SearchBar onFormSubmit={onTermSubmit} />
         <div className="ui grid">
            <div className="ui row">
               <div className="eleven wide column">
                  <VideoDetail selectedVideo={selectedVideo} />
               </div>
               <div className="five wide column">
                  <VideoList
                     onVideoSelect={onVideoSelect}
                     videos={videos}
                  />
               </div>
            </div>
         </div>


      </div>
   )
}

export default App

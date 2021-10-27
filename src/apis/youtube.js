import axios from 'axios';


const KEY = 'AIzaSyDWZEWbwzEkGOf6JymwbUUwHXlXvsNDBjw';


export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 4,
      key: KEY
   }
});


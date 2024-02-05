import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com"

// const options = {
//     params: {
//         maxResults: '50'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'cfe3349bb5msh44a5d73d07d191ap1222b1jsn59bebbf801e3',
//         'X-RapidAPI-Host': "https://youtube-v31.p.rapidapi.com",
//     }
// };


const options = {
    params: {
      id: 'arj7oStGLkU',
      part: 'snippet,contentDetails,statistics'
    },
    headers: {
      'X-RapidAPI-Key': 'cfe3349bb5msh44a5d73d07d191ap1222b1jsn59bebbf801e3',
      'X-RapidAPI-Host': 'youtube-v3-lite.p.rapidapi.com'
    }
  };
// 08305c03ccmsh8ccd5f75eceb34fp1cfcafjsn246d6dbf049b


export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    },
}
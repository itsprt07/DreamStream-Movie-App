import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '0358f2200d640c067694a9b2c2112c38';

const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

const getMovieByGenreId = (id) => {
    return axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`);
};

export default {
    getTrendingVideos,
    getMovieByGenreId
};



// import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_key = '0358f2200d640c067694a9b2c2112c38';
// const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie`;

// const getTrendingVideos = () => {
//     return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
// }

// const getMovieByGenreId = (id) => {
//     return axios.get(`${movieByGenreBaseURL}?api_key=${api_key}&with_genres=${id}`);
// }

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
    
// };





// import axios from "axios";
// const movieBaseUrl = "https://api.themoviedb.org/3"
// const api_key = '0358f2200d640c067694a9b2c2112c38'
// const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie'

// //https://api.themoviedb.org/3/trending/all/day?api_key=0358f2200d640c067694a9b2c2112c38&append_to_response=videos


// const getTrendingVideos = () => {
//     return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
// }

// const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }
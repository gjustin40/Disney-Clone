import axios from "axios";

const MOVIE_BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "679b39c1553e6942cc4a27a9e4470efc"

const MOVIE_BY_GENRE_BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf"

const getTrendingVideos = axios.get(MOVIE_BASE_URL + "/trending/all/day?api_key=" + API_KEY);
const getMovieByGenreId = (id) => axios.get(MOVIE_BY_GENRE_BASE_URL + "&with_genres=" + id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}
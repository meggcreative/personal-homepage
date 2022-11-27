import axios from "axios";
import {ENDPOINTS} from "./movieEndpoints";
const API_KEY = "6db04688883a00698a3e7dd03b99fbfb";
export const getPopularMovies = (page) =>
  axios
    .get(`${ENDPOINTS.POPULAR_MOVIES}?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.data);
export const getMoviesByGenre = () =>
  axios
    .get(`${ENDPOINTS.POPULAR_MOVIES}?api_key=${API_KEY}`)
    .then((response) => response.data);

import { createSlice } from "@reduxjs/toolkit";

const movieStoreSlice = createSlice({
  name: "movieStore",
  initialState: {
    movies: {results:[],totalResults:0},
    status: "initial",
  },
  reducers: {
    fetchMovies: () => ({
      status: "loading",
      movies: {results:[],totalResults:0},
    }),
    fetchMoviesSuccess: (state, { payload }) => ({
      status: "success",
      movies: {results:payload.results,totalResults:payload.totalResults} ,
    }),
    fetchMoviesError: () => ({
      status: "error",
      repositories: {results:[],totalResults:0},
    }),
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} = movieStoreSlice.actions;

export const selectMovieState = (state) => state.movieStore;
export const selectMovieStatus = (state) =>
selectMovieState(state).status;
export const selectMovies = (state) =>
selectMovieState(state).movies;

export default movieStoreSlice.reducer;

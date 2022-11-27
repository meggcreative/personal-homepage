import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies } from "./movieListAPI";
import { normalizePopularMovies } from "./movieListNormalizers";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./movieListSlice";

function* fetchMoviesHandler({payload:pageNumber}) {
  try {
    const fetchedData = yield call(getPopularMovies,pageNumber);
    const normalizedMovieList=normalizePopularMovies(fetchedData.results)
    yield put(fetchMoviesSuccess({results:normalizedMovieList,totalResults:fetchedData.total_results}));
  } catch (error) {
    console.log(error)
    yield put(fetchMoviesError);
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}

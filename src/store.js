import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import personalHomePageReducer from "./features/PersonalHomePage/personalHomePageSlice";
import movieReducer from "./features/MovieListPage/movieListSlice";
import { watchFetchRepositories } from "./features/PersonalHomePage/personalHomePageSaga";
import { watchFetchMovies } from "./features/MovieListPage/movieListSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    personalHomePage: personalHomePageReducer,
    movieStore: movieReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchMovies)

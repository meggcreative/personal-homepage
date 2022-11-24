import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import personalHomePageReducer from "./features/PersonalHomePage/personalHomePageSlice";
import { watchFetchRepositories } from "./features/PersonalHomePage/personalHomePageSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    personalHomePage: personalHomePageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchRepositories);

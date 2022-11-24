import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepo } from "./personalHomePageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./personalHomePageSlice";

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(2000);
    const repositories = yield call(getRepo, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError);
  }
}

export function* watchFetchRepositories() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}

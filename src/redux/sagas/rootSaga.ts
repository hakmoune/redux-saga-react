import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./fetchUsersSaga";
import { watchCreateUser } from "./createUserSaga";

export function* rootSaga() {
  yield all([watchFetchUsers(), watchCreateUser()]);
}

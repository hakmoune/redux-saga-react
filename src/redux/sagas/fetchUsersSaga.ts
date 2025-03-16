import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../reducers/actionTypes";
import { getUsersFailur, getUsersSuccess } from "../reducers/usersActions";

function* fetchUsersSaga() {
  try {
    const response: Response = yield call(fetch, `https://dummyjson.com/users`);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    yield put(getUsersSuccess(yield response.json()));
  } catch (error: any) {
    yield put(getUsersFailur(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeEvery(ActionType.FETCH_USERS, fetchUsersSaga);
}

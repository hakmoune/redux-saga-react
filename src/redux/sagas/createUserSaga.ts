import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../reducers/actionTypes";
import { createUserFailure, createUserSuccess } from "../reducers/usersActions";
import { ICreateUserAction } from "../reducers/types";

function* createUserSaga(action: ICreateUserAction) {
  try {
    const response: Response = yield call(
      fetch,
      "https://dummyjson.com/users/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.payload),
      }
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    yield put(createUserSuccess(yield response.json()));
  } catch (error: any) {
    yield put(createUserFailure(error.message));
  }
}

export function* watchCreateUser() {
  yield takeEvery(ActionType.CREATE_USERS, createUserSaga);
}

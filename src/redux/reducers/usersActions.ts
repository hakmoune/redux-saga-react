import { Users } from "../../types/users";
import { ActionType } from "./actionTypes";
import { Action } from "./types";

export const getUsers = (): Action => ({
  type: ActionType.FETCH_USERS,
});

export const getUsersSuccess = (users: Users): Action => ({
  type: ActionType.FETCH_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailur = (error: string): Action => ({
  type: ActionType.FETCH_USERS_FAILUR,
  payload: error,
});

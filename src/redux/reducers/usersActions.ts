import { User, Users } from "../../types/users";
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

export const createUser = (user: Partial<User>): Action => ({
  type: ActionType.CREATE_USERS,
  payload: user,
});

export const createUserSuccess = (user: User): Action => ({
  type: ActionType.CREATE_USERS_SUCCESS,
  payload: user,
});

export const createUserFailure = (error: string): Action => ({
  type: ActionType.CREATE_USERS_FAILUR,
  payload: error,
});

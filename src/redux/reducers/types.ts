import { User, Users } from "../../types/users";
import { ActionType } from "./actionTypes";

export interface IGetUsersAction {
  type: ActionType.FETCH_USERS;
}

export interface IGetUsersSuccess {
  type: ActionType.FETCH_USERS_SUCCESS;
  payload: Users;
}

export interface IGetUsersFailer {
  type: ActionType.FETCH_USERS_FAILUR;
  payload: string;
}

export interface ICreateUserAction {
  type: ActionType.CREATE_USERS;
  payload: Partial<User>;
}

export interface ICreateUserSuccess {
  type: ActionType.CREATE_USERS_SUCCESS;
  payload: User;
}

export interface ICreateUserFailure {
  type: ActionType.CREATE_USERS_FAILUR;
  payload: string;
}

export type Action =
  | IGetUsersAction
  | IGetUsersSuccess
  | IGetUsersFailer
  | ICreateUserAction
  | ICreateUserSuccess
  | ICreateUserFailure;

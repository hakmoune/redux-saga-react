import { Users } from "../../types/users";
import { ActionType } from "./actionTypes";

interface IGetUsersAction {
  type: ActionType.FETCH_USERS;
}

interface IGetUsersSuccess {
  type: ActionType.FETCH_USERS_SUCCESS;
  payload: Users;
}

interface IGetUsersFailer {
  type: ActionType.FETCH_USERS_FAILUR;
  payload: string;
}

export type Action = IGetUsersAction | IGetUsersSuccess | IGetUsersFailer;

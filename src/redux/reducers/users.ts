import { Users } from "../../types/users";
import { ActionType } from "./actionTypes";
import { Action } from "./types";

interface InitialState {
  data: Users | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: null,
  isLoading: false,
  error: null,
};

const usersReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      return { ...state, isLoading: true };

    case ActionType.FETCH_USERS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };

    case ActionType.FETCH_USERS_FAILUR:
      return { ...state, error: action.payload, isLoading: false };

    case ActionType.CREATE_USERS:
      return { ...state, isLoading: true };

    case ActionType.CREATE_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          users: [action.payload, ...(state.data?.users || [])],
        },
      };

    case ActionType.CREATE_USERS_FAILUR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default usersReducer;

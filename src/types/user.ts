import { ReactElement } from "react";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  avatar: string;
}

export interface UserState {
  users: IUser[];
  loading: boolean;
  error: null | string | ReactElement;
}

export enum UserActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
  type: UserActionType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

interface FetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;

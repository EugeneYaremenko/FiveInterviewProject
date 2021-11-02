import { Dispatch } from "react";
import axios from "axios";
import { IUser, UserAction, UserActionType } from "../../types/user";

import { AvatarGenerator } from "random-avatar-generator";
const avatarGenerator = new AvatarGenerator();

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      const data = res.data.map((item: IUser) => ({
        ...item,
        avatar: avatarGenerator.generateRandomAvatar(),
      }));

      dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: UserActionType.FETCH_USERS_ERROR,
        payload: "Error loading users",
      });
    }
  };
};

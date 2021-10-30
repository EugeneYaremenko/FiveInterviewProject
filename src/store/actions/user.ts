import { Dispatch } from "react";
import axios from "axios";
import { UserAction, UserActionType } from "../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: UserActionType.FETCH_USERS_ERROR,
        payload: "Error loading users",
      });
    }
  };
};

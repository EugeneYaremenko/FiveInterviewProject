import { Dispatch } from "react";
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 5) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );

      dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: "Error loading todos",
      });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  };
};

import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const InitialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 6,
};

export const todoReducer = (
  state: TodoState = InitialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case TodoActionTypes.FETCH_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TodoActionTypes.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
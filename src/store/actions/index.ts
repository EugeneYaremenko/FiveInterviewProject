import * as UserActionCreators from "./user";
import * as TodoActionCreator from "./todo";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...UserActionCreators,
  ...TodoActionCreator,
};

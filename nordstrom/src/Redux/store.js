import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { productReducer } from "./reducer";

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

const middleware = applyMiddleware(thunkMiddleware);

export const store = createStore(productReducer, middleware);

export default store;

console.log(store);

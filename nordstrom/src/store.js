import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducer1 } from "../Register/reducer1";
import { reducer2 } from "../Login/reducer2";

const reducer = combineReducers({
  registerState: reducer1,
  loginState: reducer2,
});

let initialState = {};

const store = createStore(reducer, initialState);

export default store;

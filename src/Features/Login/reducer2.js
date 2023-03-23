import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
} from "./actionTypes";

const init = { loading: false, users: [], userData: [], error: false };
export const reducer2 = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: payload,
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: true,
      };

    case GET_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: payload,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

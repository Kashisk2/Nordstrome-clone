import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
} from "./actionTypes";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};

export const loginUserLoading = () => {
  return {
    type: LOGIN_USER_LOADING,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserError = () => {
  return {
    type: LOGIN_USER_ERROR,
  };
};

export const getUserLoading = () => {
  return {
    type: GET_USER_LOADING,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUserError = () => {
  return {
    type: GET_USER_ERROR,
  };
};

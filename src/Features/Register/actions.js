import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypes";

export const registerLoading = () => {
  return {
    type: REGISTER_LOADING,
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerError = () => {
  return {
    type: REGISTER_ERROR,
  };
};

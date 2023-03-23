import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypes";

const init = { loading: false, register: false, error: false };
export const reducer1 = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: payload,
      };

    case REGISTER_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

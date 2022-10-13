import { GetErrorData, GetLoadData, GetSuccessData } from "./action";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GetSuccessData: {
      return {
        loading: false,
        error: false,
        products: payload,
      };
    }

    case GetLoadData: {
      return {
        loading: true,
        error: false,
        products: [],
      };
    }
    case GetErrorData: {
      return {
        loading: false,
        error: true,
        products: [],
      };
    }

    default: {
      return state;
    }
  }
};

export const GetSuccessData = "GetSuccessData";
export const GetLoadData = "GetLoadData";
export const GetErrorData = "GetErrorData";

export const getsuccessdata = (data) => {
  return {
    type: GetSuccessData,
    payload: data,
  };
};

export const getloaddata = () => {
  return {
    type: GetLoadData,
  };
};

export const geterrordata = () => {
  return {
    type: GetErrorData,
  };
};

export const getData = (page) => (dispatch) => {
  dispatch(getloaddata());
  fetch(` http://localhost:4001/products?_limit=20&_page=${page}`)
    .then((res) => res.json())
    .then((res) => dispatch(getsuccessdata(res)))
    .catch(() => dispatch(geterrordata()));
};

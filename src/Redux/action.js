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

export const getData = (url, setLength) => (dispatch) => {
  dispatch(getloaddata());
  fetch(`${url}`)
    .then((res) => {
      setLength(Number(res.headers.get("X-Total-Count")));
      return res.json();
    })
    .then((res) => dispatch(getsuccessdata(res)))
    .catch(() => dispatch(geterrordata()));
};

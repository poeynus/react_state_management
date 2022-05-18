const initialState = {
  isLogginIn: false,
  data: null,
};

const logIn = (data) => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess({ userID: 1, nickname: "poey" }));
      }, 2000);
    } catch (error) {
      dispatch(loginInFailure(error));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const loginInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

export const userReducer = (prevState = initialState, action) => {
  switch (
    action.type // action -> 동기
  ) {
    case "LOG_IN":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUT": // action
      return {
        ...prevState,
        data: null,
      };
    default:
      return {
        prevState,
      };
  }
};

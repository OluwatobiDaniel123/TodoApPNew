import { registerUser, loginUser } from "../Reducer/apis";

import { AUTH_type } from "../Type/type";

export const registerNewUser = (userData) => async (dispatch) => {
  try {
    const data = await registerUser(userData);
    console.log(data);
    dispatch({
      type: AUTH_type.USER_REGISTER,
      payload: data,
    });
  } catch (error) {
    if (error.response && error.response.data) alert(error.response.data.msg);
  }
};

export const loginUsers = (userData) => async (dispatch) => {
  try {
    const { data } = await loginUser(userData);

    console.log("login data ", data);

    dispatch({
      type: AUTH_type.USER_LOGIN,
      payload: data,
    });
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    window.location.href = "users/todos";
  } catch (error) {
    if (error.response && error.response.data) alert(error.response.data.msg);
  }
};

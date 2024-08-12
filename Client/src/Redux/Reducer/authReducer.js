import { AUTH_type } from "../Type/type";

const initialState = {
  auth: [],
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_type.USER_REGISTER:
    case AUTH_type.USER_LOGIN:
      return {
        ...state,
        auth: [action.payload, ...state.auth],
      };

    default: {
      return state;
    }
  }
};

export default auth;

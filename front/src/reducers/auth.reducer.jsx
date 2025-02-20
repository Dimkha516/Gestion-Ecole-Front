const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
}

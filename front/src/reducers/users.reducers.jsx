const initialState = { allUsers: [] };

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
    case "GET_USERS":
      return { ...state, allUsers: action.payload };

    default:
      return state;
  }
}

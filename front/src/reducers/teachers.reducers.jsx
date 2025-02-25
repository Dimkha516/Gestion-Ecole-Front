const initialState = { teachers: [] };

export default function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TEACHERS":
      return { ...state, teachers: action.payload };

    default:
      return state;
  }
}

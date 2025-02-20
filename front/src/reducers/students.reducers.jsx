const initialState = { students: [] };

export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_STUDENTS":
      return { ...state, students: action.payload };

    default:
      return state;
  }
}

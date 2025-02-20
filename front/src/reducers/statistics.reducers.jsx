const initialState = { statistics: [] };

export default function statisticsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_STATISTICS":
      return { ...state, statistics: action.payload };
    default:
      return state;
  }
}

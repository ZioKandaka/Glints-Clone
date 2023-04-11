const initialState = {
  jobs: []
};

function jobReducer(state = initialState, action) {
  // console.log(action);
  if (action.type === "fetch/jobs") {
    // console.log(action, 'OKOKOK');
    return {
      ...state,
      jobs: action.payload,
    }
  } else {
    return state;
  }
}

export default jobReducer

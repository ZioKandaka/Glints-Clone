const initialStates = {
    jobs: []
}

function jobReducer(state = initialStates, action) {
    switch (action.type) {
      case "fetch/jobs":
        return {
          ...state,
          jobs: action.payload
        }
      default:
        return state;
    }
  }

  export default jobReducer
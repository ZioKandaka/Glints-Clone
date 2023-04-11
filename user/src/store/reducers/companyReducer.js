const initialStates = {
    companies: []
}

function companyReducer(state = initialStates, action) {
    switch (action.type) {
      case "fetch/companies":
        return {
          ...state,
          companies: action.payload
        }
      default:
        return state;
    }
  }

  export default companyReducer
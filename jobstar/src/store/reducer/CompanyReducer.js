const initialState = {
    companies: []
}

function companyReducer(state = initialState, action) {
    if(action.type === "fetch/companies") {
        // console.log(action, "IKI")
        return {
            ...state,
            companies: action.payload
        }
    } else {
        return state
    }
}

export default companyReducer
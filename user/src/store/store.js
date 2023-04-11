import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import jobReducer from './reducers/jobReducer';
import companyReducer from './reducers/companyReducer';

const initialStates = {
    jobs: [],
    companies: []
}

const rootReducer = combineReducers({
    jobReducer,
    companyReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store

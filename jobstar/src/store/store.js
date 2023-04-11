import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


import jobReducer from '../store/reducer/JobReducer';
import companyReducer from '../store/reducer/CompanyReducer';

const rootReducers = combineReducers({
    jobReducer,
    companyReducer
})

let store = createStore(rootReducers, applyMiddleware(thunk))

// store.subscribe(() => console.log(store))

export default store
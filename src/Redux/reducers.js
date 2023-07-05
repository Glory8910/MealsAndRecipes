import { combineReducers } from 'redux';
import userDetailsReducer from './userDetailsReducer'; 
import orderReducer from "./orderReducer"

const rootReducer = combineReducers({

    orderReducer,
    userDetailsReducer,
});

export default rootReducer;
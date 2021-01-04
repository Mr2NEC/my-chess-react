import { combineReducers } from 'redux';
import promiseReducer from './promiseReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
    promiseReducer: promiseReducer,
    authReducer: authReducer,
});

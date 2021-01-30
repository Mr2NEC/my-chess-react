import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userOnlineReducer from './userOnlineReducer';
import gameReducer from './gameReducer';
import proposeReducer from './proposeReducer';

export const rootReducer = combineReducers({
    authReducer: authReducer,
    userOnlineReducer: userOnlineReducer,
    gameReducer: gameReducer,
    proposeReducer: proposeReducer,
});

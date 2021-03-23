import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userOnlineReducer from './userOnlineReducer';
import gameDbReducer from './gameDbReducer';
import proposeReducer from './proposeReducer';
import gameReducer from './gameReducer';
import messageReducer from './messageReducer';
import errorReducer from './errorReducer';

export const rootReducer = combineReducers({
    authReducer: authReducer,
    userOnlineReducer: userOnlineReducer,
    gameDbReducer: gameDbReducer,
    gameReducer: gameReducer,
    proposeReducer: proposeReducer,
    messageReducer: messageReducer,
    errorReducer: errorReducer,
});

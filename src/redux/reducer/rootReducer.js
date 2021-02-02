import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userOnlineReducer from './userOnlineReducer';
import gameDbReducer from './gameDbReducer';
import proposeReducer from './proposeReducer';
import gameReducer from './gameReducer';
import messageReducer from './messageReducer';
import movementControlReducer from './movementControlReducer';

export const rootReducer = combineReducers({
    authReducer: authReducer,
    userOnlineReducer: userOnlineReducer,
    gameDbReducer: gameDbReducer,
    gameReducer: gameReducer,
    proposeReducer: proposeReducer,
    messageReducer: messageReducer,
    movementControlReducer: movementControlReducer,
});

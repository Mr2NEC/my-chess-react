import { LOGIN, LOGOUT } from '../type';
import jwt_decode from 'jwt-decode';

const token = localStorage.getItem('token');
const initialState = token
    ? authReducer({}, { type: LOGIN, payload: token })
    : {};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.payload,
                payload: jwt_decode(action.payload),
            };

        case LOGOUT:
            return {};

        default:
            return state;
    }
}

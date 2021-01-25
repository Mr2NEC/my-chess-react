import { LOGIN, REGISTER, LOGOUT } from '../type';
import jwt_decode from 'jwt-decode';

export default function authReducer(state, action) {
    switch (state) {
        case undefined: {
            if (localStorage.token !== null) {
                return authReducer(
                    {},
                    {
                        type: LOGIN,
                        payload: localStorage.token,
                    }
                );
            }

            return {};
        }
    }

    switch (action.type) {
        case LOGIN:
            if (action.payload !== null && action.payload !== undefined) {
                localStorage.token = action.payload;
                return {
                    ...state,

                    token: action.payload,
                    payload: jwt_decode(action.payload),
                };
            }

        case REGISTER:
            return { ...state, registerStatus: action.payload };

        case LOGOUT:
            return {};
    }

    return state;
}

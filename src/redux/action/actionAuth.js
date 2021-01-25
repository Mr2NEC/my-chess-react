import { LOGIN, REGISTER } from '../type';

export function actionRegister(payload) {
    return {
        type: REGISTER,
        payload,
    };
}

export function actionLogin(payload) {
    return {
        type: LOGIN,
        payload,
    };
}

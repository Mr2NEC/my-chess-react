import * as types from '../type';

export function actionLogin(payload) {
    if (payload) {
        localStorage.setItem('token', payload);
        return { type: types.LOGIN, payload };
    }
}

export function actionLogout() {
    localStorage.removeItem('token');
    return { type: types.LOGOUT };
}

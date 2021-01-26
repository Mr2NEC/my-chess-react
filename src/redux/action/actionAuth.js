import { LOGIN, LOGOUT } from '../type';

export function actionLogin(payload) {
    return {
        type: LOGIN,
        payload,
    };
}
export function actionLogout() {
    return { type: LOGOUT };
}

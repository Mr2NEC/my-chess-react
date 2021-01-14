import { LOGOUT } from '../type';

export default function actionLogout() {
    localStorage.removeItem('token');
    return { type: LOGOUT };
}

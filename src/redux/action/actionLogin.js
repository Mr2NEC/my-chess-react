import { LOGIN } from '../type';
import actionPromise from './actionPromise';
import { socket } from "../socket";

function actionAuthLogin(data) {
    return { type: LOGIN, payload: data };
}

export default function actionLogin(login, password) {
    const name = 'Login';
    const variables = { login: login, password: password };

    return async function (dispatch) {
        let result = await dispatch(actionPromise(name, socket.emit({type:LOGIN, ...variables})));
        console.log(result);
        return dispatch(actionAuthLogin(result));
    };
}

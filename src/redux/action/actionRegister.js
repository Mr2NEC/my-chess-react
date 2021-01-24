import { REGISTER } from '../type';
import actionLogin from './actionLogin';
import actionPromise from './actionPromise';
import { socket } from "../socket";

export default function actionRegister(login, password) {
    const name = 'Regiser';
    const variables = { login: login, password: password };

    return async function (dispatch) {
        await socket.emit("message",{type:REGISTER,...variables});
        socket.on(REGISTER, async(data)=>{
            if(data === 200){
                await dispatch(actionPromise(name,actionAuthRegister(data)))
                return dispatch(actionLogin(login, password));
            }
        })
    };
}

function actionAuthRegister(data) {
    return { type: REGISTER, payload: data };
}

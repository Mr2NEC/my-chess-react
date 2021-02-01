import { LOGIN, SENDMSG, LOGOUT, USERONLINE, USERONLINEADD,USERONLINEDEL,PROPOSEPLAY, GAMEDBINIT, GAME } from '../type';

export function actionLogin(payload) {
    return { type: LOGIN, payload };
}

export function actionLogout() {
    return { type: LOGOUT };
}

export function actionUserOnline(payload) {
    return { type: USERONLINE, payload };
}

export function actionUserOnlineAdd(payload) {
    return { type: USERONLINEADD, payload };
}

export function actionUserOnlineDel(payload) {
    return { type: USERONLINEDEL, payload };
}

export function actionProposePlay(payload) {
    return { type: PROPOSEPLAY, payload };
}

export function actionGameDb(payload) {
    return { type: GAMEDBINIT, payload };
}

export function actionGame(payload) {
    return { type: GAME, payload };
}

export function actionMessage(payload) {
    return { type: SENDMSG, payload };
}

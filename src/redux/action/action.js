import { LOGIN, LOGOUT, USERONLINE, USERONLINEADD,USERONLINEDEL,PROPOSEPLAY,CREATEGAME } from '../type';

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
export function actionCreateGame(payload) {
    return { type: CREATEGAME, payload };
}

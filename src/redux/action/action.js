import * as types from '../type';

export function actionLogout () {
    localStorage.removeItem( 'token' );
    return { type: types.LOGOUT }
}

export function actionClearMC () {
    return { type: types.CLEARMC }
}
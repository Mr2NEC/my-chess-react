import { PROPOSEPLAY, CREATEGAME } from '../type';


export default function gameReducer(state , action) {
    if(!state){
        state = {propose:{connectionId:null, login:null, status:false},createGame:{status:false,roomId:null}}
    }
    switch (action.type) {
        case PROPOSEPLAY:
            if (state.propose.status !== true) {
                state.propose = {connectionId:action.payload.connectionId, login:action.payload.login, status:action.payload.status}
            }else if(action.payload.status === false){
                state.propose = {connectionId: null, login: null, status:action.payload.status}
            }
            return state
        case CREATEGAME:
            state.createGame.status = action.payload.status
            state.createGame.roomId = action.payload.roomId
            return state
    }

    return state;
}

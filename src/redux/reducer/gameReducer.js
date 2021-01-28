import { PROPOSEPLAY, CREATEGAME } from '../type';


export default function gameReducer(state , action) {
    if(!state){
        state = {propose:{connectionId:null, login:null, status:false},createGame:{status:false,roomId:null}}
    }
    switch (action.type) {
        case PROPOSEPLAY:
            if (state.propose.status !== true) {
                state.propose = {connectionId:action.connectionId, login:action.login, status:true}
            }
            return state
        case CREATEGAME:
            state.createGame.status = action.status
            state.createGame.roomId = action.roomId
            return state
    }

    return state;
}

import { PROPOSEPLAY } from '../type';


export default function proposeReducer(state , action) {
    if(!state){
        state = {
            anotherSocketId:null,
            anotherLogin:null,
            show:false
        }
    }
    switch (action.type) {
        case PROPOSEPLAY:
            if (state.show !== true) {
                return {...state, anotherSocketId:action.payload.connectionId, anotherLogin:action.payload.login, show:action.payload.show}
            }else if(action.payload.show === false){
                return {...state, anotherSocketId: null, anotherLogin: null, show: false}
            }
            return state
           
                default:
                    break;
            
    }

    return state;
}

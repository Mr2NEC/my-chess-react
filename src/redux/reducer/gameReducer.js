import { GAME } from '../type';


export default function gameReducer(state , action) {
    if(!state){
        state = {}
    }
    switch (action.type) {
        case GAME:
                return{
                    ...state,
                    ...action.payload
                }
                   
            
                default:
                    break;
            
    }

    return state;
}

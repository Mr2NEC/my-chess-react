import { GAMEINIT } from '../type';


export default function gameReducer(state , action) {
    if(!state){
        state = {
            status:false,
            gameId:null,
            turn:null,
            color:null
        }
    }
    switch (action.type) {
        case GAMEINIT:
            if(action.payload.gameId){
                return{
                    ...state,
                    ...action.payload
                }
                }else{
                    return{
                        ...state,
                        status:false,
                        gameId: null
                }
            }    
            
                default:
                    break;
            
    }

    return state;
}

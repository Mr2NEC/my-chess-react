import { GAMEDBINIT } from '../type';


export default function gameDbReducer(state , action) {
    if(!state){
        state = {
            status:false,
            gameId:null,
            color:null,
        }
    }
    switch (action.type) {
        case GAMEDBINIT:
            if(action.payload.gameId){
                return{
                    ...state,
                    ...action.payload
                }
                }else{
                    return{
                        ...state,
                        status:false,
                        gameId: null,
                        color:null
                }
            }    
            
                default:
                    break;
            
    }

    return state;
}

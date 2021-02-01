import { MSGINIT, SENDMSG } from '../type';


export default function gameReducer(state , action) {
    if(!state){
        state = []
    }
    switch (action.type) {
        case MSGINIT:
            if(Array.isArray(action.payload)){
                return[
                    ...state,
                    ...action.payload
                ]
            }  
        case SENDMSG:
                return[
                    ...state,
                    action.payload
                ]    
    }

    return state;
}

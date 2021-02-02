import { MSGINIT, SENDMSG } from '../type';


export default function messageReducer(state , action) {
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
            state.unshift(action.payload)
                return[...state]    
    }

    return state;
}

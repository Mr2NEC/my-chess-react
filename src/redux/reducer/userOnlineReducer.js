import { USERONLINE,USERONLINEDEL,USERONLINEADD, } from '../type';


export default function userOnlineReducer(state , action) {
    if(!state){
        state = []
    }
    switch (action.type) {
        case USERONLINE:
            if (Array.isArray(action.payload)) {
                return [ ...action.payload]
            }
            return state
        case USERONLINEADD:
            return [...state, ...action.payload]

        case USERONLINEDEL:
            state = state.filter(item=> item.connectionId !== action.payload)
            console.log(state);
            return state;
    }

    return state;
}

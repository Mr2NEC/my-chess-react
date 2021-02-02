import { FROM, CLEANMC } from '../type';


export default function movementControlReducer(state , action) {
    if(!state){
        state = {}
    }
    switch (action.type) {
        case FROM:
        return {from:action.cell}
    }
    switch (action.type) {
        case CLEANMC:
        return {}
    }

    return state;
}

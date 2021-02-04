import { ERROR, ERRORHIDE } from '../type';


export default function errorReducer(state , action) {
    if(!state){
        state = {
            status:false,
            message: '',
        }
    }

        switch (action.type) {
            case ERROR:
            state = {
                    show: true,
                    message: action.payload,
                }
            return state

            case ERRORHIDE: 
            state = {
                show:false,
                message: '',
                }
            return state
                
        }

    return state;
}

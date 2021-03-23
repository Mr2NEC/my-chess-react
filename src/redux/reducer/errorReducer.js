import { ERROR, ERRORHIDE } from '../type';

const initialState = { status: false, message: '' };

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR:
            return {
                show: true,
                message: action.payload,
            };

        case ERRORHIDE:
            return {
                show: false,
                message: '',
            };

        default:
            return state;
    }
}

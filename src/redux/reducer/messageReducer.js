import { SENDMSG } from '../type';

const initialState = [];

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SENDMSG:
            state.unshift(action.payload);
            return [...state];

        default:
            return state;
    }
}

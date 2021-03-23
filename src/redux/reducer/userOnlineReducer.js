import { USERONLINE, USERONLINEDEL, USERONLINEADD } from '../type';

const initialState = [];

export default function userOnlineReducer(state = initialState, action) {
    switch (action.type) {
        case USERONLINE:
            return [...action.payload];

        case USERONLINEADD:
            return [...state, ...action.payload];

        case USERONLINEDEL:
            state = state.filter(
                (item) => item.connectionId !== action.payload,
            );
            return state;

        default:
            return state;
    }
}

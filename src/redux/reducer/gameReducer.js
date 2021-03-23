import { GAME, ENDGAME } from '../type';

const initialState = {};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case GAME:
            return {
                ...state,
                ...action.payload,
            };

        case ENDGAME:
            return {};

        default:
            return state;
    }
}

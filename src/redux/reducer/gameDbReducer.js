import { GAMEDBINIT, ENDGAME } from '../type';

const initialState = {
    status: false,
    gameId: null,
    color: null,
};

export default function gameDbReducer(state = initialState, action) {
    switch (action.type) {
        case GAMEDBINIT:
            if (action.payload.gameId) {
                return {
                    ...state,
                    ...action.payload,
                };
            } else {
                return {
                    ...state,
                    status: false,
                    gameId: null,
                    color: null,
                };
            }

        case ENDGAME: {
            return {
                status: false,
                gameId: null,
                color: null,
            };
        }
        default:
            return state;
    }
}

import { GAMEDBINIT, ALERT, ENDGAME } from '../type';

export default function gameDbReducer(state, action) {
    if (!state) {
        state = {
            status: false,
            gameId: null,
            color: null,
            alert: false,
        };
    }
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

        case ALERT: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case ENDGAME: {
            return {
                status: false,
                gameId: null,
                color: null,
                alert: false,
            };
        }
    }

    return state;
}

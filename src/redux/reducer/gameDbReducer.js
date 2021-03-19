import { GAMEDBINIT, ALERT, ENDGAME } from '../type';

const initialState = {
            status: false,
            gameId: null,
            color: null,
            alert: false,
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
              default:
        return state;
    }

}

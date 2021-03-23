import { PROPOSEPLAY } from '../type';

const initialState = {
    anotherSocketId: null,
    anotherLogin: null,
    show: false,
};

export default function proposeReducer(state = initialState, action) {
    switch (action.type) {
        case PROPOSEPLAY:
            if (state.show !== true) {
                return {
                    ...state,
                    anotherSocketId: action.payload.connectionId,
                    anotherLogin: action.payload.login,
                    show: action.payload.show,
                };
            } else if (action.payload.show === false) {
                return {
                    ...state,
                    anotherSocketId: null,
                    anotherLogin: null,
                    show: false,
                };
            }

        default:
            return state;
    }
}

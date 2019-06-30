import {
    CREATE_NEW_GAME,
} from '../actions/';

export default (state = {
    game: null,
}, action) => {
    switch (action.type) {
        case CREATE_NEW_GAME:
            return {
                ...state,
                game: action.game,
            }   
        default:
            return state;
    }
}
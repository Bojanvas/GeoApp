import {
    CREATE_NEW_GAME,
    GAME_OVER
} from '../actions/';

export default (state = {
    game: null,
    result: 0,
}, action) => {
    switch (action.type) {
        case CREATE_NEW_GAME:
            return {
                ...state,
                game: action.game,
                result: 0,
            } 
        case GAME_OVER:
            return {
                ...state,
                game: null,
                result: action.result
            } 
        default:
            return state;
    }
}
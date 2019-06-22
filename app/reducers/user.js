import {
    LOGIN_SUCCESS
} from '../actions/';

export default (state = {
    user: undefined,
    loggedIn:false,
    token: undefined,
}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                token: action.token,
                loggedIn:true
            }
        default:
            return state;
    }
}
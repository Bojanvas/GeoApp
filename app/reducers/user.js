import {
    LOGIN_SUCCESS,
    LOGIN_OUT_SUCCESS
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
        case LOGIN_OUT_SUCCESS:
            return {
                ...state,
                user: action.user,
                token: action.token,
                loggedIn:false
            }    
        default:
            return state;
    }
}
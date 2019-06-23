export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_OUT_SUCCESS = 'LOGIN_OUT_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginUser = (user, token) => ({
    type:LOGIN_SUCCESS,
    user: user,
    token:token
})

export const loginOutUser = () => ({
    type:LOGIN_OUT_SUCCESS,
    user: undefined,
    token:null
})
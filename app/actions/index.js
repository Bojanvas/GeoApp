export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_OUT_SUCCESS = 'LOGIN_OUT_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const GAME_OVER = 'GAME_OVER';

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

export const createNewGame = (game) => ({
    type: CREATE_NEW_GAME,
    game: {
       questions: game,
       index: 0,
    },
    result: 0, 
})

export const gameOver = (result) => ({
    type: GAME_OVER,
    game: null,
    result: result,
})

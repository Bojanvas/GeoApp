import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import user from './../reducers/user';
import game from './../reducers/game';

export default createStore(
    combineReducers({user, game}),
    applyMiddleware(ReduxThunk)
);

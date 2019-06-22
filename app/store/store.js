import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import user from './../reducers/user';

export default createStore(
    combineReducers({user}),
    applyMiddleware(ReduxThunk)
);

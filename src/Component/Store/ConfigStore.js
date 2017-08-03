import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducer/RootReducers';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

export default function ConfigureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        compose(
        applyMiddleware(thunk,logger),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
    );
}
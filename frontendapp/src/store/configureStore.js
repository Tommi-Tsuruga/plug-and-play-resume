/**
 * configureStore.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import experienceReducer from '../reducers/experiences';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export default () => {
    return createStore(
        combineReducers({
                experiences: experienceReducer
            }
        ),
        composeEnhancers(applyMiddleware(thunk))
    );
}

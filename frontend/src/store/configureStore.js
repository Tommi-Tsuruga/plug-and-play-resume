/**
 * configureStore.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import experienceReducer from '../reducers/experiences';
import educationReducer from '../reducers/educations'
import authReducer from '../reducers/auth'

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
    const store = createStore(
        combineReducers({
                experiences: experienceReducer,
                educations: educationReducer,
                auth: authReducer
            }
        ),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

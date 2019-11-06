/**
 * configureStore.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import experienceReducer from '../reducers/experiences';
import educationReducer from '../reducers/educations'
import authReducer from '../reducers/auth'
import basicInfoReducer from "../reducers/basicInfo";


const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            basicInfo: basicInfoReducer,
            educations: educationReducer,
            experiences: experienceReducer
            }
        ),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

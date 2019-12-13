/**
 * configureStore.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import experienceReducer from '../reducers/experiences';
import educationReducer from '../reducers/educations'
import authReducer from '../reducers/auth'
import basicInfoReducer from "../reducers/basicInfo";
import generatedReducer from "../reducers/generated";
import listingReducer from "../reducers/listings";
import errorReducer from "../reducers/errors";
import messageReducer from "../reducers/messages";
import jobHistoryReducer from "../reducers/jobHistories"

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    combineReducers({
            auth: authReducer,
            basicInfo: basicInfoReducer,
            educations: educationReducer,
            experiences: experienceReducer,
            generated: generatedReducer,
            listingInfo: listingReducer,
            errors: errorReducer,
            messages: messageReducer,
            jobHistories: jobHistoryReducer,        }
    ),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
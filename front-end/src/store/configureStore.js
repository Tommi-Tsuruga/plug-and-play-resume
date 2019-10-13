/**
 * configureStore.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {combineReducers, createStore} from 'redux';
import experienceReducer from '../reducers/experiences';

export default () => {
    const store = createStore(
        combineReducers({
            experience: experienceReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

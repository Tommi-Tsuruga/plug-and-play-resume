/**
 * auth.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS, AUTH_ERROR, LOGOUT_SUCCESS
} from "../actions/types";
// Auth Reducer

export const authDefaultReducer = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    errors: {},
};

export default (state = authDefaultReducer, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {...state, isLoading: true};

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.data
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.data.token);
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
                isLoading: false,
                errors: null
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return {
                ...state,
                errors: action.data,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                experiences: [],
                educations: [],
                basicInfo: []
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };

        default:
            return state;
    }
};
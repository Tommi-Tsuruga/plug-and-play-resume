import {
    ADD_LISTING, ADD_RESUME, DELETE_LISTING, FETCH_LISTINGS, EDIT_LISTING } from "../actions/types";

const listingReducerDefaultState = {
    isLoading: true,
    listingInfo: [],
    resumeInfo: []
};

export default (state = listingReducerDefaultState, action) => {
    switch (action.type) {
        case FETCH_LISTINGS:
            return {
                ...state,
                listingInfo: action.payload,
                isLoading: false
            };
        case DELETE_LISTING:
            return {
                ...state,
                listingInfo: state.listingInfo.filter(
                    ({ id }) => id !== parseInt(action.payload))
            };
        case ADD_LISTING:
            return {
                ...state,
                listingInfo: [ ...state.listingInfo, action.payload ]
            };
        case ADD_RESUME:
            return {
                ...state,
                resumeInfo: [ ...state.resumeInfo, action.payload ]
            };
        case EDIT_LISTING:
            return {
                ...state,
                listingInfo: [
                    ...state.listingInfo,
                    state.listingInfo.map((listingInfo) => {
                        if (listingInfo.id === parseInt(action.id)) {
                            return {
                                ...listingInfo,
                                ...action.payload
                            };
                        } else {
                            return listingInfo;
                        }
                    })
                ]
            };
        default:
            return state;
    }
}

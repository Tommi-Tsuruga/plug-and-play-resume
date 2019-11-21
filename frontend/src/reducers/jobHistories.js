import {
    ADD_JOB_HISTORY, EDIT_JOB_HISTORY, REMOVE_JOB_HISTORY, FETCH_JOB_HISTORY
} from "../actions/types";

// Experience Reducer
const jobHistoryReducerDefaultState = {
    jobHistories: []
};
export default (state = jobHistoryReducerDefaultState, action) => {
    switch (action.type) {
        case FETCH_JOB_HISTORY:
            return {
                ...state,
                jobHistories: action.payload
            };
        case ADD_JOB_HISTORY:
            return {
                ...state,
                jobHistories: [ ...state.jobHistories, action.payload ]
            };
        case REMOVE_JOB_HISTORY:
            return {
                ...state,
                jobHistories: state.jobHistories.filter(
                    ({ id }) => id !== parseInt(action.payload))
            };
        case EDIT_JOB_HISTORY:
            return {
                ...state,
                jobHistories: state.jobHistories.map((jobHistory) =>
                    jobHistory.id === parseInt(action.id) ? {
                            ...jobHistory,
                            ...action.payload
                        } : jobHistory)
            };
        default:
            return state;
    }
};

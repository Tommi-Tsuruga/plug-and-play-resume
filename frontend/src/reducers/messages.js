import { CREATE_MESSAGE } from '../actions/types';

const messageReducerDefaultState = {};

export default function(state = messageReducerDefaultState, action) {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}
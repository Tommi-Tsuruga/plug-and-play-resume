/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import uuid from 'uuid';
import moment from "moment";

// ADD_EXPERIENCE
export const addExperience = (
    {
        title = '',
        description = '',
        company = '',
        startDate = 0,
        endDate = 0,

    } = {}
) => ({
    type: 'ADD_EXPERIENCE',
    experience: {
        id: uuid(),
        title,
        description,
        company,
        startDate,
        endDate,

    }
});

// SET_START_DATE
export const setStartDate  = (start) => ({
    type: 'SET_START_DATE',
    start
});
// SET_END_DATE
export const setEndDate = (end) => ({
    type: 'SET_END_DATE',
    end
});

// REMOVE_EXPERIENCE
export const removeExperience = ({ id } = {}) => ({
    type: 'REMOVE_EXPERIENCE',
    id
});

// EDIT_EXPERIENCE
export const editExperience = (id, updates) => ({
    type: 'EDIT_EXPERIENCE',
    id,
    updates
});

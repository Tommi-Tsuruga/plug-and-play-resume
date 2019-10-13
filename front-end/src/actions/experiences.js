/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import uuid from 'uuid';

// ADD_EXPERIENCE
export const addExperience = (
    {
        title = '',
        description = '',
        company = '',
        startDate = 0,
        endDate = 0,
        calenderFocused,

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


// REMOVE_EXPERIENCE
export const removeExperience = ({id} = {}) => ({
    type: 'REMOVE_EXPERIENCE',
    id
});

// EDIT_EXPERIENCE
export const editExperience = (id, updates) => ({
    type: 'EDIT_EXPERIENCE',
    id,
    updates
});

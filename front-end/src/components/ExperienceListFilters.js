/**
 * ExperienceListFilters.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import {
    sortByTitle,
    sortByStartDate,
    sortByEndDate,
    sortByCompany
} from '../actions/filters';

const ExperienceListFilters = (props) => (
    <div>
        <p>sort by:</p>
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                switch (e.target.value) {
                    case 'date' :
                        props.dispatch(sortByStartDate());
                        break;
                    case 'title' :
                        props.dispatch(sortByTitle());
                        break;
                    case 'company' :
                        props.dispatch(sortByCompany());
                        break;
                    case 'start_date' :
                        props.dispatch(sortByStartDate());
                        break;
                    case 'end_date' :
                        props.dispatch(sortByEndDate());
                        break;
                    default :
                        break;
                }
            }}
        >
            <option value="title">Job Title</option>
            <option value="start_date">Start Date</option>
            <option value="end_date">End Date</option>
            <option value="company">Company</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExperienceListFilters);

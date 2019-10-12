/**
 * ExperienceListFilters.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from "react-dates";
import {
    sortByTitle,
    // sortByStartDate,
    // sortByEndDate,
    sortByCompany
} from '../actions/filters';

const ExperienceListFilters = (props) => (
            <div>
            <p>sort by:</p>
            <select
                value={props.filters.sortBy}
                onChange={(e) => {
                    switch (e.target.value) {
                        case 'title' :
                            props.dispatch(sortByTitle());
                            break;
                        case 'company' :
                            props.dispatch(sortByCompany());
                            break;
                        default :
                            break;
                    }
                }}
            >
                <option value="title">Job Title</option>
                {/*<option value="start">Start Date</option>*/}
                {/*<option value="end">End Date</option>*/}
                <option value="company">Company</option>
            </select>
        </div>
        );

const mapStateToProps = (state) => {
    return {
        experience: state.experience
    };
};

export default connect(mapStateToProps)(ExperienceListFilters);

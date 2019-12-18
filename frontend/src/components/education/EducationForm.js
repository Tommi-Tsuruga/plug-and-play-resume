/**
 * EducationForm.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import DateRangeSelector from "../DateRangeSelector";
import { DATE_FORMAT } from "../../actions/types";

export default class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: props.education ? props.education.school_name : '',
            degree: props.education ? props.education.degree : '',
            major: props.education ? props.education.major : '',
            startDate: props.education ? moment(props.education.start_date, DATE_FORMAT) : moment(),
            endDate: props.education ? moment(props.education.end_date, DATE_FORMAT) : moment(),
            error: '',
            buttonText: props.buttonText
        };
    }

    onSchoolNameChange = (e) => {
        const schoolName = e.target.value;
        this.setState(() => ({ schoolName }));
    };
    onDegreeChange = (e) => {
        const degree = e.target.value;
        this.setState(() => ({ degree }));
    };
    onMajorChange = (e) => {
        const major = e.target.value;
        this.setState(() => ({ major }));
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.setState(() => ({ startDate, endDate }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!(this.state.schoolName||this.state.degree||this.state.degree)) {
            this.setState(() => ({
                error: 'Please provide SchoolName, Institution and Description'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                                    school_name: this.state.schoolName,
                                    degree: this.state.degree,
                                    major: this.state.major,
                                    start_date: moment(this.state.startDate).format(DATE_FORMAT),
                                    end_date: moment(this.state.endDate).format(DATE_FORMAT)
                                });
        }
    };

    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={ this.onSubmit }>
                    { this.state.error &&
                    <p className="form-error">{ this.state.error }</p> }
                    <input
                        className="text-input"
                        type="text"
                        placeholder="School Name"
                        value={ this.state.schoolName }
                        onChange={ this.onSchoolNameChange }
                    />

                    <DateRangeSelector
                        className="input-group__item"
                        type="education"
                        education={ this.props.education }
                        onDatesChange={ ({ startDate, endDate }) => {
                            this.onDatesChange({ startDate, endDate })
                        }}
                    />
                    <div className="break" />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Degree"
                        value={ this.state.degree }
                        onChange={ this.onDegreeChange }
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Major"
                        value={ this.state.major }
                        onChange={ this.onMajorChange }
                    />
                    <button
                        className="button--full">{ this.props.buttonText }</button>
                </form>
            </div>
        )
    }
}
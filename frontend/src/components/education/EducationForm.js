/**
 * EducationForm.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import DateRangeSelector from "../DateRangeSelector";

export default class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: props.education ? props.education.schoolName : '',
            startDate: props.education ? props.education.startDate : moment(),
            endDate: props.education ? props.education.endDate : moment(),
            error: '',
            buttonText: this.props.buttonText
        };
    }
    onSchoolNameChange = (e) => {
        const schoolName = e.target.value;
        this.setState(() => ({schoolName}))
    };
    onDatesChange = ({startDate, endDate}) => {
        this.setState(() => ({startDate, endDate}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.schoolName) {
            this.setState(() => ({
                error: 'Please provide SchoolName, Institution and Description'
            }));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                schoolName: this.state.title,
                startDate: this.state.startDate.format("YYYY-MM-DD"),
                endDate: this.state.endDate.format("YYYY-MM-DD")
            });
        }
    };
    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error &&
                    <p className="form-error">{this.state.error}</p>}
                    <input
                        className="text-input"
                        type="text"
                        placeholder="School Name"
                        value={this.state.schoolName}
                        onChange={this.onSchoolNameChange}
                    />
                    <DateRangeSelector
                        className="input-group__item"
                        type="education"
                        education={this.props.education}
                        onDatesChange={({startDate, endDate}) => {
                            this.onDatesChange({startDate, endDate})
                        }}
                    />
                    <button
                        className="button--full">{this.props.buttonText}</button>
                </form>
            </div>
        )
    }
}
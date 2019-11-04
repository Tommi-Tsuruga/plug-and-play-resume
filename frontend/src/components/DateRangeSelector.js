/**
 * DateRangeSelector.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {DateRangePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

export default class DateRangeSelector extends React.Component {
    state = {
        startDate: this.props.experience ? moment(this.props.experience.startDate) : (this.props.education ? moment(this.props.education.startDate): moment()),
        endDate: this.props.experience ? moment(this.props.experience.endDate) : (this.props.education ?  moment(this.props.education.endDate): moment()),
        focusedInput: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.setState({startDate, endDate});
        this.props.onDatesChange({startDate, endDate});
    };

    handleFocusChange = focusedInput => this.setState({focusedInput});

    isOutsideRange = () => false;

    render = () => (
        <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            focusedInput={this.state.focusedInput}
            onFocusChange={this.handleFocusChange}
            startDateId={"startDate"}
            endDateId={"endDate"}
            isOutsideRange={this.isOutsideRange}
            onDatesChange={this.onDatesChange}
            noBorder={false}
        />
    );
}
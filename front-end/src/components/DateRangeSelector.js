import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux"
import { setStartDate, setEndDate } from "../actions/experiences";
import moment from "moment";
import selectExperiences from "../selectors/experiences";

class DateRangeSelector extends Component {
    state = {
        startDate: this.props.experience?moment(this.props.experience.startDate):moment().subtract(2, "year"),
        endDate: this.props.experience?moment(this.props.experience.endDate):moment(),
        focusedInput: null
    };

    handleDateChange = ({ startDate, endDate }) => {
        this.setState({startDate,endDate});
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    handleFocusChange = focusedInput => this.setState({ focusedInput });

    isOutsideRange = () => false;

    render = () => (
        <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            focusedInput={this.state.focusedInput}
            startDateId={"startDate"}
            endDateId={"endDate"}
            isOutsideRange={this.isOutsideRange}
            onDatesChange={this.handleDateChange}
            onFocusChange={this.handleFocusChange}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        experience: state
    };
};

export default connect(mapStateToProps)(DateRangeSelector)


import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../actions/filters';

class DateRangePickerWrapper extends React.Component {
    state = {
            focusedInput: null,
    };

    onDatesChange = ({ start, end }) => {
        this.props.dispatch(setStartDate(start));
        this.props.dispatch(setEndDate(end));
    };
    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput }));
    };

    render() {
        return (
            <DateRangePicker
                startDate={this.props.startDate}
                startDateId="start"
                endDateId="end"
                endDate={this.props.endDate}
                focusedInput={this.state.focusedInput || null}
                startDatePlaceholderText="Start Date"
                endDatePlaceholderText="End Date"
                minimumNights={7}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                isOutsideRange={() => false}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(DateRangePickerWrapper);
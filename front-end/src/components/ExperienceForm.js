import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.experience ? props.experience.title : '',
            company: props.experience ? props.experience.company : '',
            description: props.experience ? props.experience.description : '',
            createdAt: props.experience ? moment(props.experience.createdAt) : moment(),
            startDate: props.experience ? moment(props.experience.startDate) : moment(),
            endDate: props.experience ? moment(props.experience.endDate) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    };
    onCompanyChange = (e) => {
         const company = e.target.value;
         this.setState(()=> ({company}))
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    };
    onStartDateChange = (startDate) =>{
        if(startDate) {
            this.setState( () => ({startDate}));
        }
    };
    onEndDateChange = (endDate) =>{
        if(endDate) {
            this.setState( () => ({endDate}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description) {
            this.setState(() => ({
                error: 'Please provide the job title and' +
                    ' description'
            }));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                company: this.state.company,
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
                startDate: this.state.startDate.valueOf(),
                endDate: this.state.endDate.valueOf()
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <input
                        type="text"
                        placeholder="Company"
                        value={this.state.company}
                        onChange={this.onCompanyChange}
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <SingleDatePicker
                        placeholder="Start Date"
                        date={this.state.createdAt}
                        onDateChange={this.onStartDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <SingleDatePicker
                        placeholder="End Date"
                        date={this.state.createdAt}
                        onDateChange={this.onEndDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add Experience</button>
                </form>
            </div>
        )
    }
}

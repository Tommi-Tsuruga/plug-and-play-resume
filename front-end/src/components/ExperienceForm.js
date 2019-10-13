/**
 * ExperienceForm.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import DateRangeSelector from "./DateRangeSelector";

export default class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.experience ? props.experience.title : '',
            company: props.experience ? props.experience.company : '',
            description: props.experience ? props.experience.description : '',
            startDate: props.experience ? props.experience.startDate : moment(),
            endDate: props.experience ? props.experience.endDate : moment(),
            error: '',
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
        this.setState(() => ({company}))
    };
    onDatesChange = ({startDate, endDate}) => {
        this.setState(() => ({startDate, endDate}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description || !this.state.company) {
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
                startDate: this.state.startDate.format("MM/DD/YYYY"),
                endDate: this.state.endDate.format("MM/DD/YYYY")
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
                    <DateRangeSelector
                        onDatesChange={({startDate, endDate}) => {
                            this.onDatesChange({startDate, endDate})
                        }}
                        experience={this.props.experience}
                    />
                    <button>Add Experience</button>
                </form>
            </div>
        )
    }
}

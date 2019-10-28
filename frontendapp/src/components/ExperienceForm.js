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
            buttonText: this.props.buttonText
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
                error: 'Please provide Job Title, Institution and' +
                    ' Description'
            }));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                company: this.state.company,
                description: this.state.description,
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
                        placeholder="Job Title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Institution"
                        value={this.state.company}
                        onChange={this.onCompanyChange}
                    />
                    <DateRangeSelector
                        className="input-group__item"
                        experience={this.props.experience}
                        onDatesChange={({startDate, endDate}) => {
                            this.onDatesChange({startDate, endDate})
                        }}
                    />
                    <textarea
                        className="textarea"
                        placeholder="Detailed description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <button
                        className="button--full">{this.props.buttonText}</button>
                </form>
            </div>
        )
    }
}

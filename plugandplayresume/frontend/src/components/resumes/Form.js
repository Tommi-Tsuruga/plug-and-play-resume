import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBasicInfo, addExperience } from '../../actions/experience';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    education: '',
    workHistory: '',
    experience: '',
    experienceTitle: ''
  };

  static propTypes = {
    addBasicInfo: PropTypes.func.isRequired,
    addExperience: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      education,
      workHistory,
      experience,
      experienceTitle
    } = this.state;
    const basicInfo = { name, email, education, workHistory };
    // Modify this to take multiple exp fields

    const experienceFields = { experience, experienceTitle };
    this.props.addBasicInfo(basicInfo);
    this.props.addExperience(experienceFields);
    // console.log(experienceFields);
    this.setState({
      name: '',
      email: '',
      education: '',
      workHistory: '',
      experienceTitle: '',
      experience: ''
    });
  };

  // Add some type of reactive experience field
  //(one of the ones that you can click a plus next to to add a new one  something)
  // each plus will fire off an axios call to experience api to add to db
  render() {
    const {
      name,
      email,
      education,
      workHistory,
      experience,
      experienceTitle
    } = this.state;

    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Resume Info</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className='form-group'>
            <label>E-mail</label>
            <input
              className='form-control'
              type='text'
              name='email'
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Education</label>
            <input
              className='form-control'
              type='text'
              name='education'
              onChange={this.onChange}
              value={education}
            />
          </div>
          <div className='form-group'>
            <label>Work History</label>
            <textarea
              className='form-control'
              type='text'
              name='workHistory'
              onChange={this.onChange}
              value={workHistory}
            />
          </div>
          <div className='form-group'>
            <label>Experience Title</label>
            <textarea
              className='form-control'
              type='text'
              name='experienceTitle'
              onChange={this.onChange}
              value={experienceTitle}
            />
          </div>
          <div className='form-group'>
            <label>Experience</label>
            <textarea
              className='form-control'
              type='text'
              name='experience'
              onChange={this.onChange}
              value={experience}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addBasicInfo, addExperience }
)(Form);

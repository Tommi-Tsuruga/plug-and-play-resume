import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBasicInfo } from '../../actions/experience';
export class Form extends Component {
  state = {
    name: '',
    email: '',
    education: '',
    workHistory: ''
  };

  static propTypes = {
    addBasicInfo: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, education, workHistory } = this.state;
    const basicInfo = { name, email, education, workHistory };
    this.props.addBasicInfo(basicInfo);
    this.setState({
      name: '',
      email: '',
      education: '',
      workHistory: ''
    });
  };

  render() {
    const { name, email, education, workHistory } = this.state;
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
  { addBasicInfo }
)(Form);

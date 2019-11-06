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
    experiences: [{ experienceTitle: '', experienceText: '' }]
  };
  addClick() {
    this.setState(prevState => ({
      experiences: [
        ...prevState.experiences,
        { experienceTitle: '', experienceText: '' }
      ]
    }));
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let experiences = [...this.state.experiences];
    experiences[i] = { ...experiences[i], [name]: value };
    this.setState({ experiences });
  }

  removeClick(i) {
    let experiences = [...this.state.experiences];
    experiences.splice(i, 1);
    this.setState({ experiences });
  }

  createUI() {
    return this.state.experiences.map((el, i) => (
      <div key={i}>
        <input
          placeholder='Experience Title'
          name='experienceTitle'
          value={el.experienceTitle || ''}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          placeholder='Experience'
          name='experienceText'
          value={el.experienceText || ''}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          type='button'
          value='remove'
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }
  static propTypes = {
    addBasicInfo: PropTypes.func.isRequired,
    addExperience: PropTypes.func.isRequired
  };

  onChange = e => {
    if (e.target.name) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, education, workHistory, experiences } = this.state;
    const basicInfo = { name, email, education, workHistory };
    if (
      typeof experiences[0].experienceTitle !== 'undefined' &&
      experiences[0].experienceTitle !== ''
    ) {
      for (var i = 0; i < experiences.length; i++) {
        this.props.addExperience(experiences[i]);
      }
    }
    //add more logic here for the rest of them
    if (basicInfo.name !== '') {
      console.log('submit');
      this.props.addBasicInfo(basicInfo);
    }
    this.setState({
      name: '',
      email: '',
      education: '',
      workHistory: '',
      experiences: [{ experienceTitle: '', experienceText: '' }]
    });
  };

  // Add some type of reactive experience field
  //(one of the ones that you can click a plus next to to add a new one  something)
  // each plus will fire off an axios call to experience api to add to db
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
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <form onSubmit={this.onSubmit}>
          <div>
            {this.createUI()}
            <input
              type='button'
              value='add more'
              onClick={this.addClick.bind(this)}
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

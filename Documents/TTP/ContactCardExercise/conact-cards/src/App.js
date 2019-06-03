import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

class ContactCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: props.contactName,
      mobileNumber: props.mobileNumber,
      workNumber: props.workNumber,
      email: props.email
    }
  }

  render() {
    return <div class="card">
    <div class="card-body">
      <h1 id="name"> {this.props.contactName} </h1>
      <h3 id="email">{this.props.email}</h3>
      <h2 id="number">Mobile: {this.props.mobileNumber}</h2>
      <h2 id="number">{this.props.workNumber}</h2>

    
    </div>
  </div>
  }
};

ContactCards.propTypes = {
  contctName: PropTypes.string.isRequired,
  mobileNumber: PropTypes.number.isRequired,
  workNumber: PropTypes.number,
  email: PropTypes.string.isRequired
}

var hardCodedContacts = <div>
  <div float = "left">
<ContactCards contactName = "JG Wentworth" mobileNumber = "877-CASH-NOW" />
</div>
<div flat = "right">
<ContactCards contactName = "Celino" mobileNumber = "888-8888" email = "Celino@CelinoNBarnes@LawsuitsRUs.com" />
</div>
<ContactCards contactName = "Barnes" mobileNumber = "454-2020" email = "Barnes@CelinoNBarnes@LawsuitsRUs.com" />
</div>

class App extends Component {
  render() {
    return hardCodedContacts;
  }
}

export default App;
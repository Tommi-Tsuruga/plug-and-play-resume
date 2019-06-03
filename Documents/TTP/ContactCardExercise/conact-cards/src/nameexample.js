import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class HelloFriend extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name
    }

    setTimeout(this.updateName.bind(this), 2000)
  }

  updateName(){
    this.setState({name: 'Jeff'});
  }

  render(){
    return <h1>Hello {this.state.name}!</h1>
  }
};

class App extends Component {
  render() {
    return <HelloFriend />
  }
}

export default App;
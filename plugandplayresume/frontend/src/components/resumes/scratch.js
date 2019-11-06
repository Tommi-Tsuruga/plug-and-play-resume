class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [{ experienceTitle: '', experienceText: '' }]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addClick() {
    this.setState(prevState => ({
      experiences: [
        ...prevState.experiences,
        { experienceTitle: '', experienceText: '' }
      ]
    }));
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
          placeholder='Last Name'
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

  handleExpChange(i, e) {
    const { name, value } = e.target;
    let experiences = [...this.state.experience];
    experiences[i] = { ...experiences[i], [name]: value };
    this.setState({ experiences });
  }

  removeClick(i) {
    let experiences = [...this.state.experiences];
    experiences.splice(i, 1);
    this.setState({ experiences });
  }

  handleSubmit(event) {
    alert(
      'An experience was submitted: ' + JSON.stringify(this.state.experiences)
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}
        <input
          type='button'
          value='add more'
          onClick={this.addClick.bind(this)}
        />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));

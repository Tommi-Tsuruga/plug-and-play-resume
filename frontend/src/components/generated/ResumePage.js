import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenerated, createPDF } from '../../actions/generated';
import { Container, Button } from 'react-bootstrap';
import GeneratedList from './GeneratedList';
import { LinkContainer } from 'react-router-bootstrap';

class ResumePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGenerated());
  }

  render = () => (
    <Container>
      <div className='page-section'>
        <h2> Generated Resume </h2>
        <GeneratedList />
      </div>

      {/* <Button
        size='xl'
        className='btn-full'
        variant='info'
        onClick={id => this.props.dispatch(createPDF())}
      >
        Save as PDF
      </Button> */}
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapDispatchToProps)(ResumePage);

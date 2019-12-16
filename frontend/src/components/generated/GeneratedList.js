import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import GeneratedListItems from './GeneratedListItems';
import Loading from '../utils/Loading';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { fetchGenerated, createPDF } from '../../actions/generated';
import { LinkContainer } from 'react-router-bootstrap';
import { save } from 'save-file';
class GeneratedList extends Component {
  state = {
    listingID: ''
  };

  componentDidMount() {
    this.props.fetchGenerated();
  }
  async submitPDF() {
    console.log('this props in this submit function', this.props);
    await this.props.createPDF();
    console.log('generated\n', this.props.generatedPDF);
    let url = window.URL.createObjectURL(
      new Blob([this.props.generatedPDF], { type: 'application/pdf' })
    );
    let a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    a.click();
  }
  render() {
    const { listingID } = this.state;
    return (
      <Fragment>
        {/* {console.log('props', this.props)} */}
        <ListGroup>
          {this.props.isLoading ? (
            <Loading className='listing-group' />
          ) : !this.props.generatedInfo.length ? (
            <p> You don't have any resume yet </p>
          ) : (
            this.props.generatedInfo.map(generatedInfo => (
              <GeneratedListItems key={generatedInfo.id} {...generatedInfo} />
            ))
          )}
        </ListGroup>
        <Button
          size='xl'
          className='btn-full'
          variant='info'
          onClick={this.submitPDF.bind(this)}
        >
          Save as PDF
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  generatedInfo: state.generated.generatedInfo,
  generatedPDF: state.generated.generatedPDF,
  isLoading: state.generated.isLoading
});

export default connect(mapStateToProps, { fetchGenerated, createPDF })(
  GeneratedList
);

import React from "react";
import { connect } from "react-redux";
import GeneratedListItems from "./GeneratedListItems";
import Loading from "../utils/Loading";
import { ListGroup } from "react-bootstrap";

const GeneratedList = (props) => (
    <ListGroup>
        { props.isLoading ? <Loading className="listing-group"/> :
          !props.generatedInfo.length ?
          <p> You don't have any resume yet </p> :
          props.generatedInfo.map(generatedInfo => (
              <GeneratedListItems
                  key={ generatedInfo.id }
                  { ...generatedInfo }
              />))
        }
    </ListGroup>
);

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo,
    isLoading: state.generated.isLoading
});

export default connect(mapStateToProps)(GeneratedList);

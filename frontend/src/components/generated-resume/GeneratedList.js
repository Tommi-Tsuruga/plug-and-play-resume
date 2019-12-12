import React from "react";
import { connect } from "react-redux";
import GeneratedListItems from "./GeneratedListItems";
import Loading from "../Loading";

const GeneratedList = (props) => (
    <>
        <h2 className="list-header">
            Generated Resume
        </h2>
        { props.isLoading ? <Loading/> :
          !props.generatedInfo.length ?
          <p> You don't have any resume yet </p> :
          props.generatedInfo.map(generatedInfo => (
              <GeneratedListItems
                  key={ generatedInfo.id }
                  { ...generatedInfo }
              />))
        }
    </>
);

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo,
    isLoading: state.generated.isLoading
});

export default connect(mapStateToProps)(GeneratedList);

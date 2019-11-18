import React from "react";
import { connect } from "react-redux";
import GeneratedListItems from "./GeneratedListItems";
import Loading from "../Loading";

const GeneratedList = (props) => (
    <div className="section">
        <h2 className="list-header">
            Generated Resume
        </h2>
        <div className="container">
            <div className="list-body">
                { props.isLoading ? <Loading/> :
                    !props.generatedInfo.length ?
                        <div className="list-item">
                            You don't have any resume yet
                        </div> : props.generatedInfo.map(generatedInfo =>
                            <GeneratedListItems
                                key={ generatedInfo.id}
                                { ...generatedInfo }
                            />)
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo,
    isLoading: state.generated.isLoading
});

export default connect(mapStateToProps)(GeneratedList);

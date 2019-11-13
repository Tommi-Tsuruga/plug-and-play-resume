import React from "react";
import { connect } from "react-redux";
import GeneratedListItems from "./GeneratedListItems";

const GeneratedList = (props) => {
    if (props.generatedInfo.length === 0) {
        return (
            <p>You don't have any resume yet</p>
        );
    } else {
        return (
            <div className="section">
                <h3 className="list-header">Your Generated Resume</h3>
                <div className="container">
                    <div className="list-body">
                        { props.generatedInfo.map(generatedInfo => {
                            return <GeneratedListItems
                                key={ generatedInfo.listingID }
                                { ...generatedInfo }
                            />
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo
});

export default connect(mapStateToProps)(GeneratedList);

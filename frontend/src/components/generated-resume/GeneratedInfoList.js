import React from "react";
import {connect} from "react-redux";
import {fetchGenerated} from "../../actions/generated";
import GeneratedListItems from "./GeneratedListItems";

const GeneratedInfoList = (props) => {
    return (
        <div className="section">
            <h3 className="list-header">Your Generated Resume</h3>
            <div className="container">
                <div className="list-body">
                    {console.log(props.generatedInfo)}
                    {props.generatedInfo.map(generatedInfo => {
                        return <GeneratedListItems
                            key={generatedInfo.id} {...generatedInfo}/>;
                    })}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo
});

export default connect(mapStateToProps)(GeneratedInfoList);

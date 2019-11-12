import React from "react";
import {connect} from "react-redux";
import {fetchGenerated} from "../../actions/generated";
import GeneratedListItems from "./GeneratedListItems";

const GeneratedInfoList = (props) => {
    if(props.generatedInfo.length===0) {
        return (
            <p>You don't have any resume yet</p>
        );
    }
    else {
        console.log(props.generatedInfo[0]);
        const generatedInfo = props.generatedInfo[0];
        return (
            <div className="section">
                <h3 className="list-header">Your Generated Resume</h3>
                <div className="container">
                    <div className="list-body">
                        <div className="list-item">
                            <div className="list-item__title">
                                { `${ generatedInfo.first_name } ${ generatedInfo.last_name }` }
                                <>
                                    <h2>Education: </h2>
                                    <li>{ generatedInfo.education1 }</li>
                                    <li>{ generatedInfo.education2 }</li>
                                    
                                    <h2>RelevantExperience</h2>

                                    <li>{ generatedInfo.relevantExperience1 }</li>
                                    <li>{ generatedInfo.relevantExperience2 }</li>
                                    <li>{ generatedInfo.relevantExperience3 }</li>
                                </>
                            </div>
                        </div>
                        {/*{console.log(props.generatedInfo)}*/ }
                        {/*{props.generatedInfo.map(generatedInfo => {*/ }
                        {/*    return <GeneratedListItems*/ }
                        {/*        key={generatedInfo.id} {...generatedInfo}/>;*/ }
                        {/*})}*/ }
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo
});

export default connect(mapStateToProps)(GeneratedInfoList);

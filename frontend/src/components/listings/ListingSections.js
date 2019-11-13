import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteListing, addResume} from "../../actions/listings";
import ListingItems from "./ListingItems";
import { createMessage, returnErrors } from "../../actions/messages";
import errors from "../../reducers/errors";



const ListingSections = (props) => {
    const MIN_EXPERIENCES = 5;
    const errorMsg = "You need to have at least four experiences to generate " +
                     "accurate resume";
    return (
        <div className="section">
            <h2 className="list-header">Your listing</h2>
            <div className="container">
                <div className="list-body">
                    { props.listingInfo.map((listingInfo) =>
                        <ListingItems
                            key={listingInfo.id}
                            {...listingInfo}
                            submitResume={(i) => {
                                if (props.experiences.length < MIN_EXPERIENCES)
                                { alert(errorMsg) }
                                 else { props.dispatch(addResume({ i })) }
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    listingInfo: state.listingInfo.listingInfo,
    experiences: state.experiences.experiences,
});

export default connect(mapStateToProps)(ListingSections);
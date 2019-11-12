import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteListing, addResume} from "../../actions/listings";
import ListingItems from "./ListingItems";

const ListingSections = (props) => {
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
                                props.dispatch(addResume({i}));
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    listingInfo: state.listingInfo.listingInfo
});

export default connect(mapStateToProps)(ListingSections);
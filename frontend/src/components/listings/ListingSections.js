import React from "react";
import { connect } from "react-redux";
import { addResume, deleteListing } from "../../actions/listings";
import ListingItems from "./ListingItems";
import { ListGroup } from "react-bootstrap";


const ListingSections = (props) => {
    const MIN_EXPERIENCES = 2;
    const errorMsg = "You need to have at least two experiences to generate " +
        "accurate resume";
    return (
        <ListGroup>
            { props.listingInfo.map((listingInfo, index) => (
                <ListingItems
                    key={ index }
                    index={ index }
                    { ...listingInfo }
                    removeResume={ (id) => {
                        props.dispatch(deleteListing(id))
                    }}
                    submitResume={ (i) => {
                        if (props.experiences.length < MIN_EXPERIENCES) {
                            alert(errorMsg)
                        } else {
                            props.dispatch(
                                addResume({ i }))
                        }
                    }}
                />
                ))}
        </ListGroup>
    );
};

const mapStateToProps = state => ({
    listingInfo: state.listingInfo.listingInfo,
    experiences: state.experiences.experiences,
});

export default connect(mapStateToProps)(ListingSections);
import React, {Component} from 'react';
import ListingForm from './listings/ListingForm';
import ListingSection from './listings/ListingSections';

const ListingPage = (props) => (
    <div>
        <ListingForm/>
        <ListingSection/>
    </div>
);

export default ListingPage;

import React, { Fragment } from 'react';
import ListingForm from './ListingForm';
import ListingSection from './ListingSections';

export default function ListingDashboard() {
  return (
    <Fragment>
      <ListingForm />
      <ListingSection />
    </Fragment>
  );
}

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import LoadingPage from "../components/LoadingPage";

const PublicRoute = ({
    isAuthenticated,
    userLoading,
    component: Component,
    ...rest,
    }) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (<Redirect to="/"/>) : (<Component {...props} />)
        )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    userLoading: state.auth.userLoading
});

export default connect(mapStateToProps)(PublicRoute);
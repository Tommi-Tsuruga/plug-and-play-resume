import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Loading from "../components/Loading";

const PrivateRoute = ({
    isAuthenticated,
    isLoading,
    component: Component,
    ...rest
    }) => isLoading ? <Loading/> : (
            <Route { ...rest } component={ (props) => (
                isAuthenticated ? (
                    <>
                        <Header/>
                        <Component { ...props } />
                    </>
                ) : (
                    <Redirect to="/login"/>
                )
            ) }/>
        );

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps)(PrivateRoute);

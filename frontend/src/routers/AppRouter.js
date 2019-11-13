/**
 * AppRouter.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import PlugResumePage from "../components/PlugResumePage";
import LoginPage from "../components/accounts/LoginPage";
import RegisterPage from "../components/accounts/RegisterPage";
import SectionPage from "../components/SectionPage";
import NotFoundPage from "../components/NotFoundPage";
import { createBrowserHistory } from "history";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ResumePage from "../components/ResumePage";
import ListingPage from "../components/ListingPage";
import EditEducationPage from "../components/education/EditEducationPage";

export const history = createBrowserHistory();

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <div>
                    <Switch>
                        <PrivateRoute
                            path="/"
                            component={ PlugResumePage }
                            exact={ true }/>
                        <PublicRoute
                            path="/login"
                            component={ LoginPage }/>
                        <PublicRoute
                            path="/register"
                            component={ RegisterPage }/>
                        <PrivateRoute
                            path="/profile"
                            component={ SectionPage }/>
                        <PrivateRoute
                            path="/listing"
                            component={ ListingPage }/>
                        <PrivateRoute
                            path="/resume"
                            component={ ResumePage }/>
                        <PrivateRoute
                            path="/education/:id"
                            component={ EditEducationPage }/>
                        <Route
                            component={ NotFoundPage }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
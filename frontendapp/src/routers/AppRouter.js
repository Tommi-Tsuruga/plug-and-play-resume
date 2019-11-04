/**
 * AppRouter.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import PlugResumePage from "../components/PlugResumePage";
import LoginPage from "../components/LoginPage";
import { createBrowserHistory } from 'history'
import ExperiencePage from "../components/ExperiencePage";
import EditExperiencePage from "../components/EditExperiencePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import ListingPage from "../components/ListingPage";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={PlugResumePage} exact={true}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/experience" component={ExperiencePage}/>
                <Route path="/listing" component={ListingPage}/>
                <Route path="/edit/:id" component={EditExperiencePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
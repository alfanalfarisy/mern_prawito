import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Login,  MainApp,  Register } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <MainApp />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
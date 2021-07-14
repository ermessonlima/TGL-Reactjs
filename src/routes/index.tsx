import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Recover from "../pages/Recover";
import Bet from "../pages/Bet";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login /> 
                </Route>
                <Route exact path="/register">
                    <Registration /> 
                </Route>
                <Route exact path="/recover">
                    <Recover /> 
                </Route>
                <Route exact path="/home">
                    <Home /> 
                </Route>
                <Route exact path="/bet">
                    <Bet /> 
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
//import {PrivateRoute} from "./routes/private";

import asyncComponents from './components/async/AsyncComponent'
const HomeComponent=asyncComponents(()=>import ('./pages/home/home'))
export default class RouterComponent extends React.Component{
  render() {
    return(
        <React.Fragment>
            <Router>
                <React.Fragment>
                    <Switch>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Route exact path={"/"} component={HomeComponent}></Route>
                    </Switch>
                </React.Fragment>
            </Router>
        </React.Fragment>
    );
  }
}




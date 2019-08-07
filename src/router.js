import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
//import {PrivateRoute} from "./routes/private";
import asyncComponents from './components/async/AsyncComponent'
import config from './assets/js/conf/config';

const HomeComponent=asyncComponents(()=>import ('./pages/home/home'))
export default class RouterComponent extends React.Component{
  render() {
    return(
        <React.Fragment>
            <Router>
                <React.Fragment>
                    <Switch>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Route  path={config.path+"home"} component={HomeComponent}></Route>
                        <Redirect to={config.path+"home/index"}></Redirect>
                    </Switch>
                </React.Fragment>
            </Router>
        </React.Fragment>
    );
  }
}




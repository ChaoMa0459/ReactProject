import React from 'react';
import {Login} from './Login';
import {Register} from './Register';
import { Switch, Route } from 'react-router-dom'

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    }
}
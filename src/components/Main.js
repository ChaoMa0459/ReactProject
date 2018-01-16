import React from 'react';
import {Login} from './Login';
import {Register} from './Register';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Login/>
            </div>
        );
    }
}
import React, { Component } from 'react';
import '../styles/App.css';
import { Main } from './Main';
import { Header } from './Header';

class App extends Component {
    state = {
        isLoggedIn: false
    }

    loginHandler = (response) => {
        this.setState({
            isLoggedIn: true
        });
    }

    render() {
    return (
      <div className="App">
        <Header/>
        <Main isLoggedIn = {this.state.isLoggedIn}
              loginHandler = {this.loginHandler}/>
      </div>
    );
  }
}

export default App;

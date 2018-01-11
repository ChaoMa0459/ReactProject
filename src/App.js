import React, { Component } from 'react';
import './App.css';
import { Main } from './Main';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;

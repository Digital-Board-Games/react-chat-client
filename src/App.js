import React, { Component } from 'react';
import './App.css';
import Messages from './Messages.js';
import Input from './Input.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Messages></Messages>
        <Input></Input>
      </div>
    );
  }
}

export default App;

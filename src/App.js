import React, { Component } from 'react';
import './App.css';
import Messages from './Messages.js';
import Input from './Input.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          content: 'hey',
        },
        {
          id: 2,
          content: 'you',
        },
      ]
    }
  }

  addMessage = (message) => {
    this.setState((prevState) => {
      let messages = Object.assign({}, prevState).messages;
      const maxId = messages.reduce((p, c) => {
        return c.id > p ? c.id : p;
      }, 0);
      let fullMessage = {};
      Object.assign(fullMessage, message, {id: maxId + 1});
      messages.push(fullMessage);
      return {messages: messages};
    });
  };

  render() {
    return (
      <div className="App">
        <Messages messages={this.state.messages}></Messages>
        <Input handleSubmit={this.addMessage}></Input>
      </div>
    );
  }
}

export default App;

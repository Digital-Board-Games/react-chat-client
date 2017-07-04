import React, { Component } from 'react';
import Message from './Message.js';

class Messages extends Component {
  render() {
    const messages = this.props.messages;
    let components = messages.map((message, ind) => {
      return <Message
               key={message.id}
               content={message.content} />
    });
    return (
      <div className="Messages">
        <ul>
          {components}
        </ul>
      </div>
    );
  }
}

export default Messages;

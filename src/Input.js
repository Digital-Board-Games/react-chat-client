import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }

  handleOnChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit({content: this.state.value});
    this.setState({value: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleOnChange} />
        <input type='submit' value='Send' />
      </form>
    );
  }
}

export default Input;

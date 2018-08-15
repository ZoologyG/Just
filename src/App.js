import React, { Component } from 'react';
import { Button } from 'antd';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: 'primary'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('666');
    this.setState({
      color: 'default'
    })
  }
  render() {
    return (
      <Button type={this.state.color} onClick={this.handleClick}>按钮one</Button>
    )
  }
}

export default App
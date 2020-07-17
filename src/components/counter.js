import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
  }

  handleCount = () => {
    this.setState({ count:this.state.count + 1 });
  };

  render() {
    return (
      <>
      <h3 style={{color: '#a5d888'}}>
          {this.props.counterName}
      </h3>
        <span style={{marginBottom:'1rem'}} >{this.state.count}</span>
        <button onClick={this.handleCount}>
            add
        </button>
      </>
    );
  }
}

export default Counter;

import React, { Component } from "react";
import styled from "styled-components";

const Bar = styled.input`
  text-align: center;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 350px;
  height: 40px;
  background: #f1ebfd;
  color: #7f5d8b;
  border: none;
  margin-top: 20px;
  box-shadow: 1px 6px 8px -5px rgba(0, 0, 0, 0.75);
  border-radius: 6px 6px 6px 6px;
  &:focus {
    outline: none;
    box-shadow: 1px 6px 8px 0px rgba(0, 0, 0, 0.75);
    &:hover {
      box-shadow: 1px 6px 8px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;

class Input extends Component {
  constructor(props) {
    super(props);
  }
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.Submit();
    }
  };
  render() {
    return (
      <div>
        <Bar
          value={this.props.value}
          onChange={e => this.props.handleChange(e)}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Input;

import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: Arial, Helvetica;
  font-weight: 800;
  font-size: medium;
  height: 20px;
  width: 60px;
  background-color: #7f5d8b;
  color: white;
  border: none;
  margin-top: 20px;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 1px 6px 8px -5px rgba(0, 0, 0, 0.75);
  &:hover {
    cursor: pointer;
    box-shadow: 1px 6px 8px 0px rgba(0, 0, 0, 0.75);
  }
  &:focus {
    outline: none;
  }
`;

class Submit extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Button onClick={this.props.handleSubmit}>Add</Button>
        </div>
      );
    }
  }
  
  export default Submit;

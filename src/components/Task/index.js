import React, { Component } from "react";
import styled from "styled-components";

const Sheet = styled.div`
  color: #7f5d8b;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding-top: 15px;
  font-size: large;
  margin-top: 20px;
  width: 280px;
  height: 35px;
  background-color: #e6fbff;
  display: inline-block;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 1px 6px 8px -5px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 1px 6px 8px 0px rgba(0, 0, 0, 0.75);
    background-color: #f9bdba;
  }
`;

class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, id } = this.props;
    return (
      <div>
        <Sheet onClick={() => this.props.handleDelete(id)}>{item}</Sheet>
      </div>
    );
  }
}

export default Task;

import React, { Component } from "react";
import { Title, Wrapper, Header } from "./styled";
import Input from "./components/Input/index";
import Submit from "./components/Submit/index";
import Task from "./components/Task/index";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
  }
  handleSubmit = () => {
    const { items, value } = this.state;
    this.setState({
      items: [...items, value],
      value: ""
    });
  };
  handleChange = event => {
    const { items, value } = this.state;
    this.setState({
      value: event.target.value
    });
  };

  handleDelete = key => {
    const { items, value } = this.state;
    // let index = items.indexOf(event.target.value);
    let newItems = items.filter((v, i) => i !== key);
    this.setState({
      items: newItems
    });
    console.log(key);
  };

  render() {
    const { items, value } = this.state;
    return (
      <Wrapper>
        <Title>Brain Dump</Title>
        <Header>Enter task here!</Header>
        <Input
          value={value}
          handleChange={this.handleChange}
          Submit={this.handleSubmit}
        />
        <Submit handleSubmit={this.handleSubmit}>Add</Submit>
        {items.map((item, key) => {
          return <Task handleDelete={this.handleDelete} item={item} id={key} />;
        })}
      </Wrapper>
    );
  }
}

export default home;

//import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// showing vs-code github setup
class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle Change");
  };
  handleSubmit = e => {
    console.log("handle Submit");
  };
  clearList = e => {
    console.log("clear List");
  };
  handleDelete = id => {
    console.log(`handle Delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle Edit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleedit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

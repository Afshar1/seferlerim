//import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


// showing vs-code github setup
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

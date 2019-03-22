import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.linkedin.com/in/harg2018/" target="_blank">
              <img src={logo} width="40" height="40" alt="harg2018 on LinkedIN" />
            </a>
            <Link to="/" className="navbar-brand">Feel the MERN-App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Task's</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create-A-Task(s)</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>

    );
  }
}

export default App;
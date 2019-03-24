import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'
import logo from './logo.png';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.linkedin.com/in/harg2018/" target="_blank">
              <img src={logo} width="40" height="40" alt="harg2018 on LinkedIN" />
            </a>
            <Link to="/" className="navbar-brand">HOME</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Tasks</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Task(s)</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <br />
          
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
        <Jumbotron className="Jumbo">
      
      </Jumbotron>
      </Router>

    );
  }
}

export default App;
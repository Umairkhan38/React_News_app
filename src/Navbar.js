import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blistering.com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/Business">Business</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/Entertainment">Entertainment</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/General">General</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/Health">Health</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/Science">Science</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/Sports">Sports</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/Technology">Technology</Link>
        </li>
        <hr />
       
        </ul>
       
    
    </div>
  </div>
</nav>
            </div>
        )
    }
}

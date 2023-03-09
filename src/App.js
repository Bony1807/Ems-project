import "./App.css";
import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import { Home } from "./Component/Home";
// import { Employee } from "./Component/Employee";
import Emp from "./Component/Emp";
import Aboutcomp from "./Component/About";
function App() {
  return (
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">EMS</h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/employee"
            >
              Employee
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<Aboutcomp />}></Route>
        <Route path="/employee" element={<Emp />}></Route>
      </Routes>
    </div>
  );
}

export default App;

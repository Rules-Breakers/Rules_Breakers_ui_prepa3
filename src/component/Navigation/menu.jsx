import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./menu.css";
import avatar from "./image/bg.jpg";
import logo from "./image/logo.png";


export function Menu() {
    return(
        <>
            <header>
    <div class="px-3 py-2 bg-dark sticky-top">
      <div class="container d-flex justify-content-between">
        <div>
            <img src={logo} alt="" className="avatar" />
        </div>
        <div class="justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <NavLink className="nav-link text-white" to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-white" to="/"> Administration</NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-white" to="/"> Students</NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-white" to="/">Settings</NavLink>
            </li>
          </ul>
        </div>
        <div class="text-end">
          <button type="button" class="btn btn-primary mx-3">Add User</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}
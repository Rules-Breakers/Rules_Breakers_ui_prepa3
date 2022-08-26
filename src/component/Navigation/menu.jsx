import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./menu.css";
import logo from "./image/book.png";


export function Menu() {
  const navigate = useNavigate()
    return(
        <>
  <header>
    <div className="px-3 navbar" >
      <div className="container d-flex justify-content-between">
        <div>
            <img src={logo} alt="" className="avatar my-2" onClick={()=>navigate('/home')} />
        </div>
        <div className="justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <NavLink className="nav-link text-white" to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-white" to="/"> Livres</NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-white" to="/"> Historique</NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-white" to="/">Settings</NavLink>
            </li>
          </ul>
        </div>
        <div class="text-end">
       
          <button type="button" class="btn btn-danger my-2" onClick={()=> navigate('/')}>Se deconnecter</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}
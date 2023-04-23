import React, { useState } from 'react'
import {Link} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {    
  return (
    <>
    <div>
      
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/home">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarcollapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link class="btn btn-primary btn-sm" to="/login" role="button">Log Out</Link>
          </li>
        </ul>
        
      </div>
    </nav>

    </div>
    

  </>
  )
}

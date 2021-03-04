import React from 'react'
import logo from "../assets/images/mh-logo.png"
// React FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div>
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="nav-logo rounded" src={logo} alt="logo..."/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#aboutme">about me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#technologies">Technologies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contact">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar

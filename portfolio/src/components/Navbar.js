import React from 'react'
import logo from "../mh-logo.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div>
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo rounded" src={logo} alt="logo..."/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">about me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">how work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar

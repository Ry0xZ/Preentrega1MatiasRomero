import React from "react";
import "./NavBar.css";
import Brand from "../brand/Brand";
import Cart from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/monitor" className="nav-link active">
                  Monitores
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/teclado" className="nav-link active">
                  Teclados
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/mouse" className="nav-link active">
                  Mouse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Cart />
    </header>
  );
};

export default NavBar;

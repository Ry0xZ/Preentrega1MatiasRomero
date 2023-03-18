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
                <Link to="/procesador" className="nav-link active">
                  Procesadores
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/memoria" className="nav-link active">
                  Memoria Ram
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/placa" className="nav-link active">
                  Placas de Video
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/motherboard" className="nav-link active">
                  Motherboards
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fuente" className="nav-link active">
                  Fuentes
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

import React from "react";
import "./index.css";
import img4 from "../Pictures/img4.jpg";
import img5 from "../Pictures/img5.jpg";
import logo from "../Pictures/logo.jpg";
import { Search } from "react-bootstrap-icons";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <img src={logo} className="nav-logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse offset-md-3"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li class="nav-item">
                <a class="nav-link home active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Book A Test
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Knowledge
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Center
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form class="row">
              <Search className="align-self-center col-2" />
              <img
                src={img4}
                className="justdial-logo align-self-center col-2"
              />
              <img
                src={img5}
                alt=""
                className="person-logo align-self-center col-2"
              />
              <p className="fs-3 align-self-center col-1">
                <b>Support</b>
              </p>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#about">
        Shelby Andersen
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

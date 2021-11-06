import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
            </div>
          </div>
          <div className="form-check form-switch">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggleStyle}
                id="flexSwitchCheckDefault"
                name="myswitch"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "dark mode is on" : "enable dark mode"}
              </label>
            </div>
            <div className="mx-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggleStyleRed}
                id="flexSwitchCheckDefault"
                name="myswitch"
              />
              <label
                className={` form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark"
                  ? "dark red mode is on"
                  : "enable dark red mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
}

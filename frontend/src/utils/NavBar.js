import React, { useState } from "react";
import { Link } from "react-router-dom";
import isdsiLogo from "../graphics/isdsi-logo-md.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile header with hamburger - takes space in layout */}
      <div
        className="d-md-none navbar navbar-light sticky-top overflow-hidden theme-bg"
        style={{ willChange: "transform" }}
      >
        <div className="container-fluid">
          <Link style={{ backgroundColor: "" }} className="navbar-brand" to="/">
            <img style={{ width: "70px" }} alt="ISDSI Logo" src={isdsiLogo} />
          </Link>
          <button
            className="navbar-toggler"
            onClick={toggleNavbar}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      {/* Vertical navbar - mobile */}
      <nav
        className={`d-flex flex-column p-3 bg-light ${
          isOpen ? "" : "d-md-none collapse"
        }`}
        style={{
          width: "130px",
          height: "100vh",
          position: "fixed",
          right: 0,
          top: 0,
          zIndex: 1040,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <button
          onClick={toggleNavbar}
          className="align-self-end btn text-decoration-none"
          style={{ fontSize: "1.5rem" }}
        >
          × {/* This is the X symbol */}
        </button>
        <div className="d-flex flex-column align-items-end px-3">
          <Link
            className="nav-link py-2"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="nav-link py-2"
            to="/add-reservation"
            onClick={() => setIsOpen(false)}
          >
            Create
          </Link>
          <Link
            className="nav-link py-2"
            to="/settings"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <Link
            className="nav-link py-2 text-danger"
            to="/logout"
            onClick={() => setIsOpen(false)}
          >
            Log Out
          </Link>
        </div>
      </nav>

      {/* Horizontal navbar - desktop */}
      <nav
        className="d-none d-md-flex navbar navbar-expand-md navbar-light sticky-top overflow-hidden theme-bg"
        style={{ willChange: "transform" }}
      >
        <div className="container-fluid">
          {/* Logo stays on the left */}
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "70px", height: "auto", display: "block" }}
              alt="ISDSI Logo"
              src={isdsiLogo}
            />
          </Link>

          {/* Links container pushed to the right */}
          <div className="d-flex align-items-center gap-3 ms-auto mx-3">
            {" "}
            {/* Added ms-auto here */}
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/add-reservation">
              Create
            </Link>
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
            <Link className="nav-link text-danger" to="/logout">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

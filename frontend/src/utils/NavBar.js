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
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            style={{ backgroundColor: "black" }}
            className="navbar-brand"
            to="/"
          >
            <img style={{ width: "50px" }} alt="ISDSI Logo" src={isdsiLogo} />
          </Link>
        </div>
      </div>

      {/* Vertical navbar - mobile */}
      <nav
        className={`d-flex flex-column p-3 bg-light ${
          isOpen ? "" : "d-md-none collapse"
        }`}
        style={{
          width: "250px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1040,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          marginTop: "56px", // Height of the mobile header
        }}
      >
        <div className="d-flex flex-column">
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
            Add Reservation
          </Link>
          <Link
            className="nav-link py-2"
            to="/account"
            onClick={() => setIsOpen(false)}
          >
            Account
          </Link>
          <Link
            className="nav-link py-2"
            to="/settings"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <Link
            className="nav-link py-2 text-danger mt-3"
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
      <img style={{ width: "70px", height: "auto", display:"block" }} alt="ISDSI Logo" src={isdsiLogo} />
    </Link>

    {/* Links container pushed to the right */}
    <div className="d-flex align-items-center gap-3 ms-auto"> {/* Added ms-auto here */}
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/add-reservation">Add Reservation</Link>
      <Link className="nav-link" to="/account">Account</Link>
      <Link className="nav-link" to="/settings">Settings</Link>
      <Link className="nav-link text-danger" to="/logout">Log Out</Link>
    </div>
  </div>
      </nav>
    </>
  );
}

export default Navbar;

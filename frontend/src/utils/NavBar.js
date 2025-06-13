import React, { useState } from 'react';

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="position-relative">
      {/* Logo/Toggle Button (Top Right) */}
      <div 
        className="position-fixed end-0 top-0 m-3" 
        style={{ zIndex: 1030, cursor: 'pointer' }}
        onClick={toggleNav}
      >
        <div className="">
          <span className="theme-btn">☰</span>
        </div>
      </div>

      {/* Hidden NavBar */}
      <div 
        className={`position-fixed end-0 top-0 vh-100 bg-light shadow-lg ${isNavVisible ? '' : 'translate-x-100'} `}
        style={{
          width: '250px',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1020,
          transform: isNavVisible ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        <div className="d-flex flex-column h-100 p-4">
          <h4 className="mb-4 text-primary">Menu</h4>
          
          {/* Vertical Navigation Links */}
          <nav className="nav flex-column">
            <a className="nav-link py-3 border-bottom" href="/">Home</a>
            <a className="nav-link py-3 border-bottom" href="add-reservation">Add Reservation</a>
            <a className="nav-link py-3 border-bottom" href="account">Account</a>
            <a className="nav-link py-3 border-bottom" href="settings">Settings</a>
            <a className="nav-link py-3 text-danger" href="logout">Log Out</a>
          </nav>

          <div className="mt-auto text-muted small">
            © {new Date().getFullYear()} Your App
          </div>
        </div>
      </div>

      {/* Overlay when nav is open */}
      {isNavVisible && (
        <div 
          className="position-fixed start-0 top-0 w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 1010 }}
          onClick={toggleNav}
        />
      )}
    </div>
  );
};

export default NavBar;
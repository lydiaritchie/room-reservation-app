import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap's lg breakpoint
      if (!isMobile) setIsNavVisible(false); // Close mobile menu when resizing to desktop
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const toggleNav = () => {
    if (isMobile) setIsNavVisible(!isNavVisible);
  };

  // Desktop Nav Items (horizontal)
  const desktopNav = (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Your Logo</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add-reservation">Add Reservation</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/account">Account</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/settings">Settings</Link></li>
            <li className="nav-item"><Link className="nav-link text-danger" to="/logout">Log Out</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // Mobile Nav Items (vertical)
  const mobileNav = (
    <>
      {/* Hamburger Icon */}
      <button 
        className="navbar-toggler position-fixed end-0 top-0 m-3" 
        type="button"
        onClick={toggleNav}
        style={{
          zIndex: 1030,
          border: 'none',
          background: 'transparent'
        }}
      >
        <span className="theme-btn">menu</span>
      </button>

      {/* Mobile Menu */}
      <div 
        className={`offcanvas offcanvas-end ${isNavVisible ? 'show' : ''}`}
        style={{
          visibility: isNavVisible ? 'visible' : 'hidden',
          width: '250px'
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={toggleNav}
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <Link className="py-2 text-decoration-none" to="/" onClick={toggleNav}>Home</Link>
          <Link className="py-2 text-decoration-none" to="/add-reservation" onClick={toggleNav}>Add Reservation</Link>
          <Link className="py-2 text-decoration-none" to="/account" onClick={toggleNav}>Account</Link>
          <Link className="py-2 text-decoration-none" to="/settings" onClick={toggleNav}>Settings</Link>
          <Link className="py-2 text-danger text-decoration-none" to="/logout" onClick={toggleNav}>Log Out</Link>
        </div>
      </div>

      {/* Overlay */}
      {isNavVisible && (
        <div 
          className="position-fixed start-0 top-0 w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 1020 }}
          onClick={toggleNav}
        />
      )}
    </>
  );

  return (
    <header>
      {/* Show desktop nav on large screens, mobile on small screens */}
      <div className="d-none d-lg-block">{desktopNav}</div>
      <div className="d-lg-none">{mobileNav}</div>
    </header>
  );
};

export default NavBar;
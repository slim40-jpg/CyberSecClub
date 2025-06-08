import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-link">
          <span className="brand-supcom">SUPCOM</span>
          <span className="brand-cybersec">CyberSec</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>

          <div 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link dropdown-toggle">
              Activities <FiChevronDown className="chevron" />
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/ctf" className="dropdown-item">CTF</Link>
              <Link to="/workshops" className="dropdown-item">Workshops</Link>
              <Link to="/events" className="dropdown-item">All Events</Link>
            </div>
          </div>

          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/join" className="join-button">Join Us</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link">Home</Link>
          <Link to="/about" className="mobile-link">About</Link>
          <div className="mobile-dropdown">
            <p className="mobile-title">Activities</p>
            <Link to="/ctf" className="mobile-sub-link">CTF</Link>
            <Link to="/workshops" className="mobile-sub-link">Workshops</Link>
            <Link to="/events" className="mobile-sub-link">All Events</Link>
          </div>
          <Link to="/team" className="mobile-link">Team</Link>
          <Link to="/contact" className="mobile-link">Contact</Link>
          <Link to="/join" className="mobile-join">Join Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

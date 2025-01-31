import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <NavLink className="navbar-title" to="/">
                Vishnu<span className='navbar-brand fs-2'>VRM.</span>
            </NavLink>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active-link" : ""} 
                    onClick={toggleMenu}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "active-link" : ""} 
                    onClick={toggleMenu}
                >
                    About Me
                </NavLink>
                <NavLink 
                    to="/projects" 
                    className={({ isActive }) => isActive ? "active-link" : ""} 
                    onClick={toggleMenu}
                >
                    Projects
                </NavLink>
                <NavLink 
                    to="/certificates" 
                    className={({ isActive }) => isActive ? "active-link" : ""} 
                    onClick={toggleMenu}
                >
                    Certificates
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "active-link" : ""} 
                    onClick={toggleMenu}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

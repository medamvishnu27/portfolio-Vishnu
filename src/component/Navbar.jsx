import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func(...args);
                }, delay);
            };
        };

        const debouncedHandleScroll = debounce(handleScroll, 100); // Debounce scroll event

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <NavLink className="navbar-title mx-2 text-black" to="/">
                Vishnu<span className='navbar-brand fs-2'>VRM.</span>
            </NavLink>
            <button className="hamburger mx-3" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} onClick={toggleMenu}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} onClick={toggleMenu}>
                    About Me
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""} onClick={toggleMenu}>
                    Projects
                </NavLink>
                <NavLink to="/certificates" className={({ isActive }) => isActive ? "active-link" : ""} onClick={toggleMenu}>
                    Certificates
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={toggleMenu}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

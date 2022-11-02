import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="container my-4">
            <div className="row">
            <div className="header-div">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Reviews</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dashboard</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink>

                {/* <Link to="/about">About</Link> */}
            </div>
            </div>
        </div>
    );
};

export default Header;
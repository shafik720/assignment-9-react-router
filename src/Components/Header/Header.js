import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    function showMenu(){
        let menubar = document.querySelector('.header-div');
        let clickOpen = document.querySelector('.clickOpen');
        let clickClose = document.querySelector('.clickClose');
        clickOpen.classList.add('hidden');
        clickClose.classList.remove('hidden');
        menubar.classList.add('active');
    }
    function hideMenu(){
        let menubar = document.querySelector('.header-div');
        let clickOpen = document.querySelector('.clickOpen');
        let clickClose = document.querySelector('.clickClose');
        clickOpen.classList.remove('hidden');
        clickClose.classList.add('hidden');
        menubar.classList.remove('active');
    }
    
    return (
        <div className="container my-4">
            <div className="row">
                <div className="menu-icon">
                    <div className="menu-logo">
                        <h2>Dragon's Club</h2>
                    </div>
                    <h2 onClick={showMenu} className="clickOpen"><FontAwesomeIcon icon={faBars} /></h2>
                    <h2 onClick={hideMenu} className="clickClose hidden"><FontAwesomeIcon icon={faBarsStaggered} /></h2>
                </div>
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
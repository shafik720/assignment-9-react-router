import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import dragonLogo from '../../utilities/img/dragon (1).png'
import './Header.css';

const Header = () => {
    function showMenu(){
        let menubar = document.querySelector('.header-div');
        let clickOpen = document.querySelector('.clickOpen');
        let clickClose = document.querySelector('.clickClose');

        let parentMenubar  = document.querySelector('.header-div-parent');
        parentMenubar.classList.add('active');
        clickOpen.classList.add('hidden');
        clickClose.classList.remove('hidden');
        menubar.classList.add('active');
    }
    function hideMenu(){
        let menubar = document.querySelector('.header-div');
        let clickOpen = document.querySelector('.clickOpen');
        let clickClose = document.querySelector('.clickClose');

        let parentMenubar  = document.querySelector('.header-div-parent');
        parentMenubar.classList.remove('active');
        clickOpen.classList.remove('hidden');
        clickClose.classList.add('hidden');
        menubar.classList.remove('active');
    }
    function parentClick(e){        
        let clickOpen = document.querySelector('.clickOpen');
        let clickClose = document.querySelector('.clickClose');

        let menubar = document.querySelector('.header-div');
        if(e.target.className == 'header-div-parent active'){
            menubar.classList.remove('active');

            let parentMenubar  = document.querySelector('.header-div-parent');
            parentMenubar.classList.remove('active');
            clickOpen.classList.remove('hidden');
            clickClose.classList.add('hidden');
        }
    }
    // navigate to home page
    let navigate = useNavigate();
    function navigateHome(){
        let url = '/';
        navigate(url);
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="menu-icon">
                    <div onClick={navigateHome} className="menu-logo">
                        <img src={dragonLogo} alt=""/>
                        <h2>Dragon's Club</h2>
                    </div>
                    <h2 onClick={showMenu} className="clickOpen"><FontAwesomeIcon icon={faBars} /></h2>
                    <h2 onClick={hideMenu} className="clickClose hidden"><FontAwesomeIcon icon={faBarsStaggered} /></h2>
                </div>
            <div onClick={parentClick} className="header-div-parent">
            <div className="header-div">
                <NavLink  onClick={hideMenu}  to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                <NavLink  onClick={hideMenu}  to="/reviews" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Reviews</NavLink>
                <NavLink  onClick={hideMenu} to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dashboard</NavLink>
                <NavLink  onClick={hideMenu} to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs</NavLink>
                <NavLink  onClick={hideMenu} to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink>

                {/* <Link to="/about">About</Link> */}
            </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
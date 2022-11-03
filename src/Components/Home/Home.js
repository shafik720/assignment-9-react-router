import React from 'react';
import './Home.css';
import img1 from '../../utilities/img/dragon.png'
import { useNavigate } from 'react-router';

const Home = () => {
    // navigating after clicking the Show Me button in home page
    const navigate = useNavigate();
    function navigationToShop(){
        let url = '/shop';
        navigate(url);
    }

    // functions for showing 3 User reviews in home page
    return (
        <div className="container">
            <div className="row home-div">
                <div className="col-lg-6">
                    <div className="home-left h-100">
                        <h1>Welcome To <span className="red-text"> Dragon</span>'s Club</h1>
                        <h2>Buy a Dragon</h2>
                        <h2>Ride a Dragon</h2>
                        <h2>And Be a Dragon</h2>
                        <button onClick={navigationToShop}>Show Me, I am Excited</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="home-right">
                        <img src={img1} alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
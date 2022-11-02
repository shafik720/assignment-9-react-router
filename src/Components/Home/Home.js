import React from 'react';
import './Home.css';
import img1 from '../../utilities/img/dragon.png'

const Home = () => {
    return (
        <div className="container">
            <div className="row home-div">
                <div className="col-lg-6">
                    <div className="home-left h-100">
                        <h1>Welcome To <span className="red-text"> Dragon</span>'s Club</h1>
                        <h2>Buy a Dragon</h2>
                        <h2>Ride a Dragon</h2>
                        <h2>And Be a Dragon</h2>
                        <button>Show Me, I am Excited</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="">
                        <img src={img1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
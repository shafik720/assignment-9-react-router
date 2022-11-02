import React from 'react';
import './Home.css';
import img1 from '../../utilities/img/dragon (1).png'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="">
                        <h2>Welcome To Dragon's Club</h2>
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
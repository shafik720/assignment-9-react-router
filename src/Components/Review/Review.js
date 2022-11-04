import React from 'react';
import './Review.css';

const Review = (props) => {
    const{ img, userName, location, profession, comments, dragonName, imgSrc, price, ratings} = props.index;
    console.log(props.index);
    return (
        <div className=" col-lg-4 review-divs">
            <div className="user-card">
                <div className="productCard">
                    <div className="productCard-top">
                        <img src={imgSrc} alt=""/>
                    </div>
                    <div className="productCard-details">
                        <div className="details-left">
                            <p>{dragonName}</p>
                        </div>
                        <div className="details-right">
                            <p>Price : {price} BTC </p>
                            <p>Ratings : {ratings} </p>
                        </div>
                    </div>
                </div>
                <div className="userCard-top">
                    <div className="userImg">
                        <img src={img} alt=""/>
                    </div>              
                    <div className="user-details">
                        <p>{userName} </p>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="user-comments">
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
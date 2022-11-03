import React from 'react';
import './Review.css';

const Review = (props) => {
    const{ img, userName, location, profession, comments} = props.index;
    console.log(props.index);
    return (
        <div className=" col-lg-4">
            <div className="user-card">
                <div className="userCard-top">
                    <div className="userImg">
                        <img src={'/img/user.jpg'} alt=""/>
                    </div>              
                    <div className="user-details">
                        <p>Name : {userName} </p>
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
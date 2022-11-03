import React, { useEffect, useState } from 'react';
import useUsers from '../../utilities/hooks/useUsers';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    let[users, setUsers] = useUsers();
    return (
        <div className="container review-div">
            <div className="row">
            {
                users.map(index=><Review
                    index={index}
                    key={index.id}
                ></Review>)
                }
            </div>
            
        </div>
    );
};

export default Reviews;
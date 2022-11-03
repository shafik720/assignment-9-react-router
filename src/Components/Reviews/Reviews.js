import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('userDb.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
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
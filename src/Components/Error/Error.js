import React from 'react';
import './Error.css';
import sadtoothless from '../../utilities/img/toothless sleeping.png'

const Error = () => {
    return (
        <div className="container error-div">
            <h2>Error 404 Not Found</h2>
            <img src={sadtoothless} alt=""/>
        </div>
    );
};

export default Error;
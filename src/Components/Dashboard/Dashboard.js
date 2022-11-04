import React, { useEffect, useState } from 'react';
import FirstChart from '../FirstChart/FirstChart';
import './Dashboard.css'

const Dashboard = () => {
    const[chart, setChart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setChart(data))
    },[])
    return (
        <div className="dashBoard-div">
            <FirstChart chart={chart}></FirstChart>
        </div>
    );
};

export default Dashboard;
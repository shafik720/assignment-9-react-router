
import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const FirstChart = (props) => {
    console.log(props.chart);
    let data = props.chart;
    return (
        <div>
            <h2>Hello From Chart</h2>
            <div className="container">
                <div className="row">
                <LineChart width={800} height={400} data={data}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="darkred" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                </div>
            </div>
        </div>
    );
};

export default FirstChart;
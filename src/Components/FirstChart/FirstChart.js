
import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const FirstChart = (props) => {
    console.log(props.chart);
    let data = props.chart;
    return (
        <div>
            <h2 className="text-center mt-4">First Chart</h2>
            <hr width="50%" className="mx-auto mb-4" />
            <div className="container">
                <div className="row">
                <LineChart width={800} height={400} data={data}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="darkred" />
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
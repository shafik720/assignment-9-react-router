
import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const FirstChart = (props) => {
    console.log(props.chart);
    let data = props.chart;
    return (
        <div>
            <h4 className="text-center mt-5">First Chart</h4>
            <hr width="50%" className="mx-auto mb-4" />
            <div className="container">
                <div className="row">
                <LineChart width={800} height={400} data={data}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="darkred" />
                    <CartesianGrid stroke="#ccc" />
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
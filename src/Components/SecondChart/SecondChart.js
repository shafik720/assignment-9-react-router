import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const SecondChart = (props) => {
    let data = props.chart;
    console.log(data);
    return (
        <div>
            <h4 className="text-center mt-5">Second Chart</h4>
            <hr width="50%" className="mx-auto mb-4" />
            <div className="container">
                <div className="row">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SecondChart;
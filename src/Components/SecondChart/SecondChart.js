import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SecondChart = (props) => {
    let data = props.chart;
    console.log(data);
    return (
        <div>
            <h4 className="text-center mt-5">Second Chart</h4>
            <hr width="50%" className="mx-auto mb-4" />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12">
                    <ResponsiveContainer width="95%" height={400}>
                    <BarChart className="mx-auto" width={800} height={400} data={data}>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="darkblue" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                    </ResponsiveContainer>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default SecondChart;
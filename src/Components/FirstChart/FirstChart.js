import React from 'react';

const FirstChart = (props) => {
    console.log(props.chart);
    let data = props.chart;
    return (
        <div>
            <h2>Hello From Chart</h2>
        </div>
    );
};

export default FirstChart;
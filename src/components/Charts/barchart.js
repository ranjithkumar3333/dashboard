import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import './barchart.css';

function OverviewChart() {
  const data = [
    { month: 'Jan', value: 5000 },
    { month: 'Feb', value: 7000 },
    { month: 'Mar', value: 9000 },
    { month: 'Apr', value: 8000 },
    { month: 'May', value: 10000 },
    { month: 'Jun', value: 12000 },
    { month: 'Jul', value: 11000 },
    { month: 'Aug', value: 15000 },
    { month: 'Sep', value: 10000 },
    { month: 'Oct', value: 14000 },
    { month: 'Nov', value: 11000 },
    { month: 'Dec', value: 10000 },
  ];

  return (
    <div className="chart-container">
        <p id="text">Overview Earning</p>
      <ResponsiveContainer width="100%" height={223}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <Bar dataKey="value" fill="rgb(230, 230, 250)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OverviewChart;

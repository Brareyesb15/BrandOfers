import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {

  const chartData = {
    labels: data.map(d => d[0]),
    datasets: [{
      label: 'Cantidad',
      data: data.map(d => d[1]),
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1
    }]
  };
  const options = {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };   
  return (
    <div>
      <h2>Diagrama de </h2>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default BarChart;
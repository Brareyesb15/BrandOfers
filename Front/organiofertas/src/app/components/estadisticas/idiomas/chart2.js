import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart() {
  const data = {
    labels: ['Categoría 1', 'Categoría 2', 'Categoría 3'],
    datasets: [
      {
        label: 'Subcategoría 1',
        data: [10, 15, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Subcategoría 2',
        data: [5, 8, 12],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      // Agrega más datasets para más subcategorías si es necesario
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

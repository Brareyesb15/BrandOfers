import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../general.css"

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Pais({paises,num}) {

    let options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right', // Ajusta la posición de la leyenda a la derecha
          },
        },
      };    
    let data = {
        labels: paises,
        datasets: [
            {
                label: "Numero de ofertas por país",
                data: num,
                backgroundColor: [
                    '#641E16 ',
                    '#17202A',
                    '#7B7D7D    ',
                    '#145A32',
                ],
                borderColor: [
                    '#641E16 ',
                    '#17202A',
                    '#7B7D7D    ',
                    '#145A32',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="chartContainer">
        <Pie data={data} options={options} />
        </div>
        )
}
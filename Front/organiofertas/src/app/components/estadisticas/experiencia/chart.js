import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Experiencia({exp,num}) {

    let options = {
        responsive : true,
        maintainAspectRatio: false,
    };
    
    let data = {
        labels: exp,
        datasets: [
            {
                label: "Numero de ofertas por experiencia",
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
    return <Pie data={data} options={options} />
}
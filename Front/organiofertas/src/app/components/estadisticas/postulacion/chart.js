"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Postulacion({post,num}) {

    let options = {
        responsive : true,
        maintainAspectRatio: false,
    };
    
    let data = {
        labels: post,
        datasets: [
            {
                label: "Numero de ofertas por post",
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
"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../general.css"

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Estadux({est,num}) {
    console.log(est,num)

    let options = {
        responsive : true,
        maintainAspectRatio: false,
        display: false
    };
    
    let data = {
        labels: est,
        datasets: [
            {
                label: "Numero de ofertas por su estado(activo-inactivo)",
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
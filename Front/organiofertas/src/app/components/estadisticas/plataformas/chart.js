import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
import "../general.css"


export default function Bars({plats, nums}) {
// var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
// var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


var options = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 50
        },
        x: {
            ticks: { color: "#34495E"}
        }
    }
};

var data = {
    labels: plats,
    datasets: [
        {
            label: 'nums',
            data: nums,
            backgroundColor: "#34495E"
        }
    ]
};
return (
    <div className="chartContainer">
    <Bar data={data} options={options} />
    </div>
    )
}
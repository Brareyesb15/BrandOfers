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


export default function Bars({datos}) {
// var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
// var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let tecs = datos.map(array => array[0]);
let num = datos.map(array => array[1]);

var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            min: 0,
            max: num[0] + 3
        },
        x: {
            ticks: {
                color: "#96495E",
                maxRotation: 0,
                minRotation: 0,
                callback: function(value, index, values) {
                    return index === 0 ? "Tecnologías" : ""; // Muestra "Tecnologías" en la primera etiqueta
                },
                padding: 10 // Agrega espacio adicional alrededor de las etiquetas
            },
            position: "bottom",
            offset: true, // Activa el desplazamiento del eje x
            grid: {
                drawTicks: false, // Oculta las marcas de las divisiones en el eje x
                drawOnChartArea: false // Evita que las líneas de división se superpongan a las barras
            }
        }
    }
};
var midata = {
    labels: tecs,
    datasets: [
        {
            label: 'nums',
            data: num,
            backgroundColor: "#34495E"
        }
    ]
};
    return (
    <div className="chartContainer">
        <Bar data={midata} options={misoptions} />
     </div>
    )
}
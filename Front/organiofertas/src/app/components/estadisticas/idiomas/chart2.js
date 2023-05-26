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

export default function BarChart({datos}) {
    function getBackgroundColor(nivel) {
        switch (nivel) {
          case 'A1':
            return 'rgba(3, 99, 132, 0.5)';
          case 'A2':
            return 'rgba(765, 162, 235, 0.5)';
          case 'B1':
            return 'rgba(189, 206, 86, 0.5)';
          case 'B2':
            return 'rgba(945, 192, 192, 0.5)';
          case 'C1':
            return 'rgba(360, 102, 255, 0.5)';
          case 'C2':
            return 'rgba(666, 159, 64, 0.5)';
          case 'Nativo':
            return 'rgba(879, 162, 235, 0.5)';
          default:
            return 'rgba(0, 0, 0, 0.5)';
        }
      }

      const nivelesDisponibles = Array.from(
        new Set(datos.flatMap(objeto => objeto.niveles.map(nivel => nivel.nivel)))
      );
      
      // Construir la estructura de datos para Chart.js
      const data = {
        labels: datos.map(objeto => objeto.nombre), // Nombres de idioma
        datasets: nivelesDisponibles.map(nivel => ({
          label: nivel,
          data: datos.map(objeto => {
            const nivelEncontrado = objeto.niveles.find(n => n.nivel === nivel);
            return nivelEncontrado ? nivelEncontrado.repeticiones : 0;
          }),
          backgroundColor: getBackgroundColor(nivel), // Función para obtener el color de fondo basado en el nivel
        })),
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

  return (
    <div className="chartContainer">
    <Bar data={data} options={options} />
    </div>
    )
}

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip );

const BarPlot = ({ chartData }) => {
    return (

        <Bar
          data={chartData}
          options={{
            scales: {
                x: {
                    display: false
                },
                y: {
                    ticks: {
                        color: 'black'
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Bar Chart", 
                    color: 'black'
                }
            }
          }}
        />
    
    );
  };
  
  export default BarPlot;

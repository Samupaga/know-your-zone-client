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
                    }, 
                    title: {
                        text: 'Crime Counts', 
                        display: true, 
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
                    display: false,
                    text: "Bar Chart", 
                    color: 'black'
                }
            }
          }}
        />
    
    );
  };
  
  export default BarPlot;

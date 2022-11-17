import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip );

const BarPlot = ({ chartData, xAxisTitle, yAxisTitle }) => {

    {console.log(xAxisTitle, yAxisTitle)}
    return (

        <Bar

          data={chartData}
          options={{
            scales: {
                x: {
                 ticks: {
                    display: false
                 }, 
                 title: {
                    display: true, 
                    text: xAxisTitle, 
                    color: 'black'
                 }
                }, 
                y: {
                 ticks: {
                    display: true, 
                    color: 'black'
                 },
                 title: {
                    display: true, 
                    text: yAxisTitle,
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
                    text: 'Bar Chart', 
                    color: 'black'
                }
            }
          }}
        />
    
    );
  };
  
  export default BarPlot;

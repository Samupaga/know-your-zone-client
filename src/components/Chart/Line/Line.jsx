import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LinePlot = ({ chartData, xAxisTitle, yAxisTitle }) => {
  return (

      <Line
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
                        color: 'black',
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
                    position: 'right', 
                    display: false
                },
                title: {
                    display: true,
                    text: "Line Chart", 
                    color: 'black'
                }
            }
        }}
      />
  
  );
};

export default LinePlot;

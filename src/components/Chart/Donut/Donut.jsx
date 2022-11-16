import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const Donut = ({ chartData }) => {
  return (

      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false, 
            }, 
            title: {
              display: true,
              text: "Donut Chart", 
              color: 'black'
            }
          }
        }}
      />
  
  );
};

export default Donut;

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const Donut = ({ chartData }) => {
  return (

      <Doughnut
        data={chartData}
        options={{
            plugins: {
                title: {
                    display: true,
                    text: "Donut Chart"
                }
            }
        }}
      />
  
  );
};

export default Donut;

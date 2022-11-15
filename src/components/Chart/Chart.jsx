import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ chartData }) => {
  return (
    <div>
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
    </div>
  );
};

export default Chart;

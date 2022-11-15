import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LinePlot = ({ chartData }) => {
  return (

      <Line
        data={chartData}
        options={{
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Line Chart"
                }
            }
        }}
      />
  
  );
};

export default LinePlot;

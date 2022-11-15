// import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

import Donut from './Donut';
import LinePlot from './Line'; 
import BarPlot from './Bar';


const Chart = ({ chartType, chartData }) => {

  if ( chartType === 'donut') {
    return (
      <div>
        <Donut chartData={chartData} />
      </div>
    );
  } else if ( chartType === 'line' ) {
    return (
      <div>
        <LinePlot chartData={chartData} />
      </div>
    );
  } else {
    return (
      <div>
        <BarPlot chartData={chartData} />
      </div>
    );
  }    
};

export default Chart;

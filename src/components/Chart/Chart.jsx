// import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

import Donut from "./Donut";
import LinePlot from "./Line";
import BarPlot from "./Bar";

const Chart = ({ chartType, chartData, xAxisTitle, yAxisTitle }) => {
  if (chartType === "donut") {
    return (
      <div className="data-img">
        <Donut chartData={chartData} />
      </div>
    );
  } else if (chartType === "line") {
    return (
      <div className="data-img">
        <LinePlot
          chartData={chartData}
          xAxisTitle={xAxisTitle}
          yAxisTitle={yAxisTitle}
        />
      </div>
    );
  } else {
    return (
      <div className="data-img">
        <BarPlot 
          chartData={chartData} 
          xAxisTitle={xAxisTitle}
          yAxisTitle={yAxisTitle}
        />
      </div>
    );
  }
};

export default Chart;

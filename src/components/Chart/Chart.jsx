import { Pie } from 'react-chartjs-2'

const Chart = ({ chartData }) => {
  return (
    <div>
      <Pie
        data={chartData}
        options={{
            plugins: {
                title: {
                    display: true,
                    text: "Ethnicity data"
                }
            }
        }}
      />
    </div>
  );
};

export default Chart;

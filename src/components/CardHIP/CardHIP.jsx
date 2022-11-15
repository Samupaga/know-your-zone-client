import { useState, useEffect } from 'react'

import Chart from '../Chart'

const CardHIP = ({
  className,
  heading,
  dataResponse,
  secondaryInfo,
}) => {

  const [chartData, setChartData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true)

  useEffect(() => {
    const createChartData = () => {
      if(dataResponse !== undefined) {
        const labels = dataResponse.data.map(elem => elem.category)
        const values = dataResponse.data.map(elem => elem.value)
        const chartOptions = {
          labels: labels,
          datasets: [
            {
              label: "Data",
              data: values,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ]
            }
          ]
        }
  
        setChartData(chartOptions)
      }

      setIsDataLoading(false)
    }
    createChartData()
  }, [])

  if(isDataLoading) {
    return (
      <p>Chart not loaded</p>
    )
  } else {
    return (
      <div className={`${className} card`}>
        <h3 className="card-heading">{heading}</h3>
        {dataResponse === undefined || Object.keys(chartData).length === 0 ? null : <Chart chartData={chartData} />}
        <p className="secondary-info">{secondaryInfo}</p>
      </div>
    );
  }
};

export default CardHIP;

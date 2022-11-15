import { useState, useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';

import Chart from '../Chart'



const CardHIP = ({
  className,
  heading,
  dataResponse,
  chartType, 
  secondaryInfo,
}) => {

  const [chartData, setChartData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true)

  const createLineData = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const values  = [10, 20, 30, 40, 50, 60, 70]
    const chartOptions = {
      labels: labels, 
      datasets: [
        { 
          data: values, 
          backgroundColor: [
            'rgba(53, 162, 235, 0.5)'
          ]
        }
      ]
    }
    setChartData(chartOptions)
  }

  const createDonutData = () => {
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

    else {
        createLineData()
    }
  }

  const createBarData = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const values  = [10, 20, 30, 40, 50, 60, 70]
    const chartOptions = {
      labels: labels, 
      datasets: [
        { 
          data: values, 
          backgroundColor: [
            'rgba(53, 162, 235, 0.5)'
          ]
        }
      ]
    }
    setChartData(chartOptions)
  }

  useEffect(() => {
    if (chartType === 'donut'){
      createDonutData()
    } else if (chartType === 'line') {
      createLineData()
    } else if (chartType === 'bar') {
      createBarData()
    }

    setIsDataLoading(false)
  }, [])

  

  if(isDataLoading) {
    return (
      <p>Chart not loaded</p>
    )
  } else {
    return (
      <div className={`${className} card`}>
        <h3 className="card-heading">{heading}</h3>
        {/* {dataResponse === undefined || Object.keys(chartData).length === 0 ? null : <Chart chartData={chartData} />} */}
        {chartData === null ? null : <Chart chartType={chartType} chartData={chartData} />}
        <p className="secondary-info">{secondaryInfo}</p>
      </div>
    );
  }
};

export default CardHIP;

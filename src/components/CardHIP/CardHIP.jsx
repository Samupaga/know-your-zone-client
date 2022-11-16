import { useState, useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';

import Chart from '../Chart'



const CardHIP = ({
  className,
  heading,
  dataResponse,
  chartType, 
  secondaryInfo,
  londonLabels, 
  londonData, 
  xAxisTitle, 
  yAxisTitle
}) => {

  const [chartData, setChartData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true)

  const createLineData = () => {

    const values = dataResponse
        
    const dataSets = [
      {
        label: 'borough', 
        data: values, 
        borderColor: 'black', 
        backgroundColor: [
          'yellow'
        ]
      }
    ]

    if (londonData !== null) {
      dataSets.push({ 
        label: 'London', 
        data: londonData,
        borderColor: 'rgb(255, 99, 132)', 
        backgroundColor: [
          'rgb(255, 99, 132)'
        ],
        
      })
    }
      

    const chartOptions = {
      labels: londonLabels, 
      datasets: dataSets
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
  }

  const createBarData = () => {

    const londonLabels = ["Burglary", "Sexual Offences", "Violence Against the Person", "Theft", "Robbery", "Arson and Criminal Damage","Drug Offences","Vehicle Offences","Miscellaneous Crimes Against Society", "Possession of Weapons", "Public Order Offences"]
    const londonValues = [1684, 805, 7594, 7059, 831, 1683, 1420, 3405, 332, 196, 1869]

    console.log("this is the response: ", typeof parseInt(dataResponse[0].offence_count))

    const values = dataResponse.map((elem, idx ) => parseInt(elem.offence_count) - londonValues[idx])

    console.log('final values are: ', values)

    const chartOptions = {
      labels: londonLabels, 
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
        {chartData === null ? null : <Chart chartType={chartType} chartData={chartData} xAxisTitle={xAxisTitle} yAxisTitle={yAxisTitle} />}
        <p className="secondary-info">{secondaryInfo}</p>
      </div>
    );
  }
};

export default CardHIP;

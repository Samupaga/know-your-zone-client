import { useState, useEffect } from 'react'

import Chart from '../Chart'

const CardHIP = ({
  className,
  heading,
  imageSrc,
  raceData=null,
  altImageText,
  secondaryInfo,
}) => {

  const [chartData, setChartData] = useState({})
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    const setupChartData = () => {
      if(raceData !== null) {
        setChartData({
          labels: raceData.data.map(elem => elem.category),
          dataset: [
            {
              label: "Ethnicity Data",
              data: raceData.data.map(elem => elem.value)
            }
          ]
        })

        setIsDataLoaded(true)
      }
    }

    setupChartData()
  }, [])

  if(!isDataLoaded) {
    return (
      <p>Chart not loaded</p>
    )
  } else {
    return (
      <div className={`${className} card`}>
        <h3 className="card-heading">{heading}</h3>
        {raceData === null ? <img className="data-visualisation" src={imageSrc} alt={altImageText} /> : <Chart className="data-visualisation" chartData={chartData} />}
        <p className="secondary-info">{secondaryInfo}</p>
      </div>
    );
  }
};

export default CardHIP;

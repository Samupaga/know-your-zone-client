import { useState, useEffect } from "react";

import Chart from "../Chart";

const CardHIP = ({
  className,
  heading,
  dataResponse,
  chartType,
  secondaryInfo,
  londonLabels,
  londonData,
  londonBarLabels, 
  londonBarData,
  xAxisTitle,
  yAxisTitle,
}) => {
  const [chartData, setChartData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const createLineData = () => {
    const values = dataResponse;

    const dataSets = [
      {
        label: "borough",
        data: values,
        borderColor: "black",
        backgroundColor: ["rgba(255, 205, 86)"],
      },
    ];

    if (londonData !== null) {
      dataSets.push({
        label: "London",
        data: londonData,
        borderColor: "black",
        backgroundColor: ["rgb(54, 162, 235)"],
      });
    }

    const chartOptions = {
      labels: londonLabels,
      datasets: dataSets,
    };
    setChartData(chartOptions);
  };

  const createDonutData = () => {
    if (dataResponse !== undefined) {
      const labels = dataResponse.data.map((elem) => elem.category);
      const values = dataResponse.data.map((elem) => elem.value);
      const chartOptions = {
        labels: labels,
        datasets: [
          {
            label: "Data",
            data: values,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(54, 162, 235)",
              "rgba(225, 80, 219, 0.6)",
              "rgba(96, 0, 255, 0.6)",
              "rgb(201, 203, 207)",
            ],
          },
        ],
      };

      setChartData(chartOptions);
    }
  };

  const createBarData = () => {

    let values = [];
    let labels = [];
   
    console.log(dataResponse)
    if (dataResponse[1].hasOwnProperty('offence_category')) {
      labels = londonBarLabels
      values = dataResponse.map(
        (elem, idx) => parseInt(elem.offence_count) - londonBarData[idx]
      );
    } else if (dataResponse[1].hasOwnProperty('rent_median')){
      labels = londonBarLabels
      const sortedData = dataResponse.slice().sort((a, b) => labels.indexOf(a.property_type) - labels.indexOf(b.property_type))
      values = sortedData.map((elem, idx) => elem.rent_median - londonBarData[idx])
    }

    const chartOptions = {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            '#0085ad',
            '#af272f',
            '#3b99ed',
            '#743161',
            '#444444',
            '#522506',
            '#fd7f1c',
            '#4c8c2b',
            '#cb6356',
            '#5E4C6C',
            '#191970',
          ],
        },
      ],
    };
    setChartData(chartOptions);
  };

  useEffect(() => {
    if (chartType === "donut") {
      createDonutData();
    } else if (chartType === "line") {
      createLineData();
    } else if (chartType === "bar") {
      createBarData();
    }


    setIsDataLoading(false);
  }, []);

  if (isDataLoading) {
    return <p>Chart not loaded</p>;
  } else {
    return (
      <div className={`${className} card`}>
        <h3 className="card-heading">{heading}</h3>
        {/* {dataResponse === undefined || Object.keys(chartData).length === 0 ? null : <Chart chartData={chartData} />} */}
        {chartData === null ? null : (
          <Chart
            chartType={chartType}
            chartData={chartData}
            xAxisTitle={xAxisTitle}
            yAxisTitle={yAxisTitle}
          />
        )}
        <p className="secondary-info">{secondaryInfo}</p>
      </div>
    );
  }
};

export default CardHIP;

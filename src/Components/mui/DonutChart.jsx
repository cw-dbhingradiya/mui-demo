import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [44, 33, 54, 45];

  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
    },
    legend: {
      show: true,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" width={1400} />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;

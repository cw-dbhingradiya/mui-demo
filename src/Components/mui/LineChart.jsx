import React from "react";

import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
      color: "rgb(255, 171, 0)",
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
      color: "rgb(0, 167, 111)",
    },
  ];

  return <Chart options={options} series={series} type="line" height={400} />;
};
export default ApexChart;

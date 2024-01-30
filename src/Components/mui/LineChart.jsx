// import React from "react";

// import Chart from "react-apexcharts";

// const ApexChart = () => {
//   const options = {
//     xaxis: {
//       categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     },
//   };
//   const series = [
//     {
//       name: "series-1",
//       data: [30, 40, 25, 50, 49, 21, 70, 51],
//       color: "rgb(255, 171, 0)",
//     },
//     {
//       name: "series-2",
//       data: [23, 12, 54, 61, 32, 56, 81, 19],
//       color: "rgb(0, 167, 111)",
//     },
//   ];

//   return <Chart options={options} series={series} type="line" height={400} />;
// };
// export default ApexChart;

// import React from "react";

// import Chart from "react-apexcharts";

// const ApexChart = () => {
//   const options = {
//     xaxis: {
//       categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     },
//   };
//   const series = [
//     {
//       name: "series-1",
//       data: [30, 40, 25, 50, 49, 21, 70, 51],
//     },
//     {
//       name: "series-2",
//       data: [23, 12, 54, 61, 32, 56, 81, 19],
//     },
//     {
//       name: "series-3",
//       data: [24, 20, 5, 75, 42, 79, 72, 35],
//     },
//   ];

//   return <Chart options={options} series={series} type="line" height={400} />;
// };
// export default ApexChart;

import React from "react";
import ReactApexChart from "react-apexcharts";

const MultiLineChart = () => {
  // Sample data for the chart
  const chartData = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: "Series 2",
      data: [45, 55, 42, 75, 68, 80, 95, 110, 140],
    },
    {
      name: "Series 3",
      data: [60, 75, 58, 80, 85, 100, 120, 130, 160],
    },
  ];

  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
  };

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartData} type="line" height={350} />
    </div>
  );
};

export default MultiLineChart;

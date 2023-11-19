import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const LayoutChart = ({
  period,
  limit,
}: {
  period: string;
  limit: number;
}) => {
  const { isLoading, error, data } = useQuery(["todos", period, limit], () =>
    fetch(
      `https://min-api.cryptocompare.com/data/v2/${period}?fsym=BTC&tsym=USD&limit=${limit}`
    ).then((res) => res.json())
  );

  const periodPoint = period.split("histo")[1];

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>error</p>;

  const values: number = data.Data.Data.map((item: any) => item.volumefrom);
  const labels: string[] = data.Data.Data.map((item: any) => periodPoint);
  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: values,
        backgroundColor: "gray",
      },
    ],
  };
  return <Bar options={options} data={data2} />;
};

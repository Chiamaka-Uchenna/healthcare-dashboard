"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BloodPressure, Diagnosis } from "@/app/utils/types";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type BloodPressureChartProps = {
  data: Diagnosis[];
  latestBloodPressure: BloodPressure;
};

export default function BloodPressureChart({
  data,
  latestBloodPressure,
}: BloodPressureChartProps) {
  
  const chartLabels = data
    .slice(-6)
    .map((d) => {
      const date = new Date(`${d.month} 1, ${d.year}`); 
      return date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
    })
    .reverse(); 

  const chartData = {
    labels: chartLabels, 
    datasets: [
      {
        label: "Systolic",
        data: data
          .slice(-6)
          .map((d) => d.blood_pressure.systolic.value)
          .reverse(), 
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        fill: false,
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4, // Smooth curve
      },
      {
        label: "Diastolic",
        data: data
          .slice(-6)
          .map((d) => d.blood_pressure.diastolic.value)
          .reverse(), 
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        fill: false,
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "darkNavy",
        },
        grid: {
          color: "#e0e0e0",
        },
      },
      x: {
        ticks: {
          color: "darkNavy",
          maxRotation: 0, 
          minRotation: 0, 
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col bg-purple-50 p-6 rounded-lg space-y-4">
      {/* Header: Title and Time Range */}
      <div className="flex items-center justify-start gap-28">
        <h3 className="inner-card-title">Blood Pressure</h3>
        <div className="flex items-center space-x-2">
          <span className="body-regular">Last 6 months</span>
          <button className="p-1 rounded-full focus:outline-none">▼</button>
        </div>
      </div>

      {/* Chart and Information Container */}
      <div className="flex space-x-6">
        {/* Line Chart */}
        <div className="w-3/4 h-[200px]">
          <Line data={chartData} options={options} />
        </div>

        {/* Latest Blood Pressure Data */}
        <div className="flex flex-col w-1/4 space-y-6">
          {/* Systolic Information */}
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-lightPink"></span>
              <span className="manrope-bold">Systolic</span>
            </div>
            <div className="manrope-bold-lg">
              {latestBloodPressure.systolic.value}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <FaCaretUp className="text-black" />
              <span className="body-regular">
                {latestBloodPressure.systolic.levels}
              </span>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t-2 w-full" />

          {/* Diastolic Information */}
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-lightPurple"></span>
              <span className="manrope-bold">Diastolic</span>
            </div>
            <div className="manrope-bold-lg">
              {latestBloodPressure.diastolic.value}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <FaCaretDown className="text-black" />
              <span className="body-regular">
                {latestBloodPressure.diastolic.levels}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

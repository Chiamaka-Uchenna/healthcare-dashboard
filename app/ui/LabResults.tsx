"use client";

import { FaDownload } from "react-icons/fa";

type LabResultsProps = {
  labResults: string[];
};

export default function LabResults({ labResults }: LabResultsProps) {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Lab Results</h2>
      <div className="max-h-40 overflow-y-auto custom-scrollbar">
        {labResults.map((result, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 ${
              result === "CT Scans" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <span className="manrope-regular-md">{result}</span>
            <button className="text-teal-500 hover:text-teal-700">
              <FaDownload />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

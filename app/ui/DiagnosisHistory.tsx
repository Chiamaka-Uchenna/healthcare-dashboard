"use client";

import { useEffect, useState } from "react";
import MetricCard from "./MetricCard";
import BloodPressureChart from "./BloodPressureChart";
import { Diagnosis, Patient } from "@/app/utils/types";
import { FaHeartbeat, FaLungs, FaThermometerHalf } from "react-icons/fa";

type DiagnosisHistoryProps = {
  patientData: Patient;
};

export default function DiagnosisHistory({
  patientData,
}: DiagnosisHistoryProps) {
  const [latestDiagnosis, setLatestDiagnosis] = useState<Diagnosis | null>(
    null
  );

  useEffect(() => {
    if (patientData && patientData.diagnosis_history.length > 0) {
      setLatestDiagnosis(patientData.diagnosis_history[0]);
    }
  }, [patientData]);

  return (
    <div className="p-6 space-y-6 h-full bg-white rounded-xl">
      <h2 className="card-title">Diagnosis History</h2>

      {/* Blood Pressure Chart */}
      {patientData.diagnosis_history.length > 0 && latestDiagnosis && (
        <BloodPressureChart
          data={patientData.diagnosis_history}
          latestBloodPressure={latestDiagnosis.blood_pressure}
        />
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-4">
        {latestDiagnosis ? (
          <>
            <MetricCard
              color="bg-skyBlue"
              icon={<FaLungs className="text-blue" />}
              value={latestDiagnosis.respiratory_rate.value}
              label="Respiratory Rate"
              level={latestDiagnosis.respiratory_rate.levels}
            />
            <MetricCard
              color="bg-lightPeach"
              icon={<FaThermometerHalf className="text-accent" />}
              value={latestDiagnosis.temperature.value}
              label="Temperature"
              level={latestDiagnosis.temperature.levels}
            />
            <MetricCard
              color="bg-customPink"
              icon={<FaHeartbeat className="text-accent" />}
              value={latestDiagnosis.heart_rate.value}
              label="Heart Rate"
              level={latestDiagnosis.heart_rate.levels}
            />
          </>
        ) : (
          <>
            <div className="p-4 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="p-4 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="p-4 bg-gray-200 animate-pulse rounded-lg"></div>
          </>
        )}
      </div>
    </div>
  );
}

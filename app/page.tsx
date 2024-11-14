"use client";

import { useState } from "react";
import NavLinks from "./ui/nav-links";
import PatientList from "./ui/PatientList";
import DiagnosisHistory from "./ui/DiagnosisHistory";
import DiagnosticList from "./ui/DiagnosticList";
import PatientInfoCard from "./ui/PatientInfoCard";
import LabResults from "./ui/LabResults";
import { Patient } from "@/app/utils/types";

export default function Home() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <main className="flex flex-col min-h-screen bg-lightGrey">
      <div className="flex justify-center items-center p-4">
        <NavLinks />
      </div>

      <div className="flex justify-around items-start p-4 space-x-4">
        {/* Patient List */}
        <div className="w-1/4 h-full flex-shrink-0">
          <PatientList onSelectPatient={handlePatientSelect} />
        </div>

        {/* Diagnosis and Diagnostic List */}
        <div className="w-2/3 h-full flex flex-col space-y-4">
          {selectedPatient && (
            <>
              <div className="flex-1 overflow-hidden">
                <DiagnosisHistory patientData={selectedPatient} />
              </div>
              <div className="flex-1 overflow-hidden">
                <DiagnosticList
                  diagnosticList={selectedPatient.diagnostic_list}
                />
              </div>
            </>
          )}
        </div>

        {/* Patient Info Card and Lab Results */}
        <div className="w-1/4 h-full flex flex-col space-y-4">
          {selectedPatient && (
            <>
              <div className="flex-1 overflow-hidden">
                <PatientInfoCard patientData={selectedPatient} />
              </div>
              <div className="flex-1 overflow-hidden">
                <LabResults labResults={selectedPatient.lab_results} />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

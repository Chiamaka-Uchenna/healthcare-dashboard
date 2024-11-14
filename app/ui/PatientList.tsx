"use client";

import { useEffect, useState } from "react";
import { fetchPatients } from "@/app/utils/FetchPatients";
import { BiSearch } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { Patient } from "@/app/utils/types";

type PatientListProps = {
  onSelectPatient: (patient: Patient) => void;
};

export default function PatientList({ onSelectPatient }: PatientListProps) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatientName, setSelectedPatientName] = useState<string | null>(
    null
  ); // Track selected patient by name

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (error) {
        setError("Failed to load patients");
      } finally {
        setLoading(false);
      }
    };

    getPatients();
  }, []);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatientName(patient.name); 
    onSelectPatient(patient); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-white rounded-xl">
      {/* Header with title and search icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="card-title">Patients</h2>
        <BiSearch className="text-gray-500 text-2xl cursor-pointer" />
      </div>

      {/* Scrollable Patient list */}
      <div
        className="bg-white overflow-hidden custom-scrollbar"
        style={{ maxHeight: "850px", overflowY: "auto" }}
      >
        {patients.map((patient) => (
          <div
            key={patient.name} // Use patient.name as the key
            className={`flex items-center justify-between p-4 cursor-pointer ${
              selectedPatientName === patient.name
                ? "bg-teal bg-opacity-60"
                : "hover:bg-teal"
            }`}
            onClick={() => handleSelectPatient(patient)} 
          >
            <div className="flex items-center">
              <img
                src={patient.profile_picture || " "} 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="body-emphasized">{patient.name}</p>
                <p className="body-secondary-info">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <button>
              <FaEllipsisH className="text-lg text-black" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

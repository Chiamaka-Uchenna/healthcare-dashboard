"use client";

import { Patient } from "@/app/utils/types";
import { FaCalendarAlt, FaPhone, FaUser, FaShieldAlt } from "react-icons/fa";

type PatientInfoCardProps = {
  patientData: Patient;
};

export default function PatientInfoCard({ patientData }: PatientInfoCardProps) {
  
  const formattedDateOfBirth = new Date(
    patientData.date_of_birth
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="px-6 py-20 bg-white rounded-lg text-center space-y-4">
      <img
        src={patientData.profile_picture || " "}
        alt={`${patientData.name}'s profile picture`}
        className="w-36 h-36 rounded-full mx-auto"
      />
      <h2 className="card-title">{patientData.name}</h2>

      <div className="space-y-2 text-left">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <span>
            <span className="manrope-medium-sm">Date Of Birth</span>
            <p className="manrope-bold">{formattedDateOfBirth}</p>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaUser className="text-gray-500" />
          <span>
            <span className="manrope-medium-sm">Gender</span>
            <p className="manrope-bold">{patientData.gender}</p>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-500" />
          <span>
            <span className="manrope-medium-sm">Contact Info</span>
            <p className="manrope-bold">{patientData.phone_number}</p>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-500" />
          <span>
            <span className="manrope-medium-sm">Emergency Contacts</span>
            <p className="manrope-bold">{patientData.emergency_contact}</p>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-gray-500" />
          <span>
            <span className="manrope-medium-sm">Insurance Provider</span>
            <p className="manrope-bold">{patientData.insurance_type}</p>
          </span>
        </div>
      </div>

      <button className="mt-12 px-6 py-2 bg-teal rounded-full body-emphasized hover:bg-green">
        Show All Information
      </button>
    </div>
  );
}

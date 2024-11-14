"use client";

import { DiagnosticItem } from "@/app/utils/types";

type DiagnosticListProps = {
  diagnosticList: DiagnosticItem[];
};

export default function DiagnosticList({
  diagnosticList,
}: DiagnosticListProps) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="card-title mb-4">Diagnostic List</h2>

      {/* Header */}
      <div className="flex bg-lightGrey rounded-t-lg">
        <div className="p-3 w-1/3 text-left body-emphasized">
          Problem/Diagnosis
        </div>
        <div className="p-3 w-1/3 text-left body-emphasized">Description</div>
        <div className="p-3 w-1/3 text-left body-emphasized">Status</div>
      </div>

      {/* Scrollable Body */}
      <div className="overflow-y-auto max-h-40 custom-scrollbar">
        {diagnosticList.map((item, index) => (
          <div key={index} className="flex">
            <div className="p-3 w-1/3 manrope-regular-lg">{item.name}</div>
            <div className="p-3 w-1/3 manrope-regular-lg">
              {item.description}
            </div>
            <div className="p-3 w-1/3 manrope-regular-lg">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

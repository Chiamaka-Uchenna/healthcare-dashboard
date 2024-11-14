export type VitalSign = {
  value: number;
  levels: string;
};

export type BloodPressure = {
  systolic: VitalSign;
  diastolic: VitalSign;
};

export type Diagnosis = {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalSign;
  respiratory_rate: VitalSign;
  temperature: VitalSign;
};

export type DiagnosticItem = {
  name: string;
  description: string;
  status: string;
};

export type Patient = {
  id: string;
  name: string;
  gender: string;
  age: number;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  profile_picture?: string;
  diagnosis_history: Diagnosis[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
};


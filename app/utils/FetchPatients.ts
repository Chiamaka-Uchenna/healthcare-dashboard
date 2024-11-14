// utils/fetchPatients.ts
export const fetchPatients = async () => {
  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch patients");
  }

  return response.json();
};

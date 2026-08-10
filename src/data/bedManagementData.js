import { patientsPageRecords } from "../components/Patients/patientsPageData";

// -----------------------------
// Admitted patients
// -----------------------------
export const admittedPatients = patientsPageRecords.filter(
  (patient) => patient.status === "Admitted"
);

// -----------------------------
// Hospital totals
// -----------------------------
export const occupiedBeds = admittedPatients.length; // 67
export const availableBeds = 42;
export const totalBeds = occupiedBeds + availableBeds; // 109

// -----------------------------
// Ward capacities (fixed)
// -----------------------------
const ICU_CAPACITY = 24;
const GENERAL_CAPACITY = 55;
const PRIVATE_CAPACITY = 30;

// -----------------------------
// Patient allocation
// ICU: 20 patients
// General Ward: 29 patients
// Private Rooms: 18 patients
// Total occupied = 67
// -----------------------------
const icuPatients = admittedPatients.slice(0, 20);
const generalPatients = admittedPatients.slice(20, 49);
const privatePatients = admittedPatients.slice(49, 67);

// -----------------------------
// Bed generator
// -----------------------------
const createBeds = (prefix, wardName, capacity, patients) =>
  Array.from({ length: capacity }, (_, index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    ward: wardName,
    number: index + 1,
    occupied: Boolean(patients[index]),
    patient: patients[index] || null,
  }));

// -----------------------------
// Beds by ward
// -----------------------------
export const wardBeds = {
  ICU: createBeds("ICU", "ICU", ICU_CAPACITY, icuPatients),
  "General Ward": createBeds(
    "GW",
    "General Ward",
    GENERAL_CAPACITY,
    generalPatients
  ),
  "Private Rooms": createBeds(
    "PR",
    "Private Rooms",
    PRIVATE_CAPACITY,
    privatePatients
  ),
};

// Default bed layout (ICU)
export const bedLayout = wardBeds.ICU;

// -----------------------------
// Ward summary
// -----------------------------
export const wardSummary = [
  {
    ward: "ICU",
    total: ICU_CAPACITY,
    occupied: icuPatients.length,
    available: ICU_CAPACITY - icuPatients.length,
  },
  {
    ward: "General Ward",
    total: GENERAL_CAPACITY,
    occupied: generalPatients.length,
    available: GENERAL_CAPACITY - generalPatients.length,
  },
  {
    ward: "Private Rooms",
    total: PRIVATE_CAPACITY,
    occupied: privatePatients.length,
    available: PRIVATE_CAPACITY - privatePatients.length,
  },
];

// -----------------------------
// Top statistics
// -----------------------------
export const bedManagementStats = [
  {
    id: 1,
    title: "Total beds",
    value: totalBeds,
  },
  {
    id: 2,
    title: "Occupied beds",
    value: occupiedBeds,
  },
  {
    id: 3,
    title: "Available beds",
    value: availableBeds,
  },
  {
    id: 4,
    title: "ICU occupied",
    value: icuPatients.length,
  },
  {
    id: 5,
    title: "Wards",
    value: wardSummary.length,
  },
];
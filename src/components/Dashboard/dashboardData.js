import {
    FaUserInjured,
    FaUserDoctor,
    FaCalendarCheck,
    FaBedPulse,
    FaIndianRupeeSign,
    FaTruckMedical ,
} from "react-icons/fa6";

// ==========================================
// DATE HELPERS
// ==========================================

const today = new Date();

const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

const formatFullDate = (date) =>
    date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const formatWeekday = (date) =>
    date.toLocaleDateString("en-US", {
        weekday: "short",
    });

const getPastDate = (days) => {
    const date = new Date(today);
    date.setDate(today.getDate() - days);
    return date;
};  

// ==========================================
// DASHBOARD SUMMARY CARDS
// ==========================================

export const dashboardStats = [
    {
        id: 1,
        title: "Total Patients",
        value: 1284,
        icon: FaUserInjured,
        growth: 12.5,
    },
    {
        id: 2,
        title: "Total Doctors",
        value: 86,
        icon: FaUserDoctor,
        growth: 8.2,
    },
    {
        id: 3,
        title: "Available Beds",
        value: 42,
        icon: FaBedPulse,
        growth: 6.7,
    },
    {
        id: 4,
        title: "Emergency Cases",
        value: 18,
        icon: FaTruckMedical,
        growth: "+2 new today",
        variant: "danger",
    },
    
];

// ==========================================
// PATIENT ADMISSIONS
// ==========================================

export const patientAdmissions = [
    { date: formatDate(getPastDate(6)), patients: 34 },
    { date: formatDate(getPastDate(5)), patients: 56 },
    { date: formatDate(getPastDate(4)), patients: 42 },
    { date: formatDate(getPastDate(3)), patients: 71 },
    { date: formatDate(getPastDate(2)), patients: 93 },
    { date: formatDate(getPastDate(1)), patients: 74 },
    { date: formatDate(getPastDate(0)), patients: 48 },
];

// ==========================================
// DEPARTMENT DISTRIBUTION
// ==========================================

export const departmentDistribution = [
  { department: "Cardiology", patients: 86 },
  { department: "Neurology", patients: 58 },
  { department: "Orthopedics", patients: 73 },
  { department: "General Medicine", patients: 142 },
  { department: "Pediatrics", patients: 61 },
  { department: "Pulmonology", patients: 54 },
  { department: "Dermatology", patients: 37 },
  { department: "ENT", patients: 29 },
];

// ==========================================
// APPOINTMENT TREND
// ==========================================

export const appointmentTrend = [
    { day: formatWeekday(getPastDate(6)), appointments: 112 },
    { day: formatWeekday(getPastDate(5)), appointments: 176 },
    { day: formatWeekday(getPastDate(4)), appointments: 148 },
    { day: formatWeekday(getPastDate(3)), appointments: 208 },
    { day: formatWeekday(getPastDate(2)), appointments: 234 },
    { day: formatWeekday(getPastDate(1)), appointments: 169 },
    { day: formatWeekday(getPastDate(0)), appointments: 186 },
];

// ==========================================
// MONTHLY REVENUE
// ==========================================

export const monthlyRevenue = [
    { date: formatDate(getPastDate(5)), revenue: 98000 },
    { date: formatDate(getPastDate(4)), revenue: 152000 },
    { date: formatDate(getPastDate(3)), revenue: 134000 },
    { date: formatDate(getPastDate(2)), revenue: 226000 },
    { date: formatDate(getPastDate(1)), revenue: 194000 },
    { date: formatDate(getPastDate(0)), revenue: 245000 },
];

// ==========================================
// RECENT APPOINTMENTS
// ==========================================

export const recentAppointments = [
  {
    id: "APT001",
    patient: "Rahul Sharma",
    doctor: "Dr. Ravi Prakash",
    department: "Pulmonology",
    date: formatFullDate(today),
    time: "09:30 AM",
    status: "Confirmed",
  },
  {
    id: "APT002",
    patient: "Anjali Menon",
    doctor: "Dr. Vikram Nair",
    department: "Dermatology",
    date: formatFullDate(today),
    time: "10:15 AM",
    status: "Confirmed",
  },
  {
    id: "APT003",
    patient: "Kishore Rao",
    doctor: "Dr. Vikram Sethi",
    department: "Pulmonology",
    date: formatFullDate(today),
    time: "11:00 AM",
    status: "Pending",
  },
];

// ==========================================
// BED STATUS
// ==========================================

export const bedStatus = {
    totalBeds: 350,
    occupiedBeds: 308,
    availableBeds: 42,
    maintenanceBeds: 8,
    occupancy: 88,
};

// ==========================================
// IMPORTANT ALERTS
// ==========================================

export const importantAlerts = [
  {
    id: 1,
    type: "warning",
    title: "ICU Bed 3 is under maintenance",
    time: "09:15 AM"
  },
  {
    id: 2,
    type: "danger",
    title: "Low stock: Paracetamol",
    time: "08:45 AM"
  },
  {
    id: 3,
    type: "success",
    title: "New patient admitted in ICU",
    time: "08:20 AM"
  },
];
import {
  FaHouse,
  FaUsers,
  FaUserDoctor,
  FaCalendarCheck,
  FaBed,
  FaCapsules,
  FaFileInvoiceDollar,
  FaComments,
  FaGear,
} from "react-icons/fa6";

const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: FaHouse,
  },
  {
    id: 2,
    title: "Patients",
    path: "/patients",
    icon: FaUsers,
  },
  {
    id: 3,
    title: "Doctors",
    path: "/doctors",
    icon: FaUserDoctor,
  },
  {
    id: 4,
    title: "Appointments",
    path: "/appointments",
    icon: FaCalendarCheck,
  },
  {
    id: 5,
    title: "Beds",
    path: "/beds",
    icon: FaBed,
  },
  {
    id: 6,
    title: "Pharmacy",
    path: "/pharmacy",
    icon: FaCapsules,
  },
  {
    id: 7,
    title: "Billing",
    path: "/billing",
    icon: FaFileInvoiceDollar,
  },
];


export default sidebarItems;

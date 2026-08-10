import { useState, useEffect } from "react";

import PageTransition from "../../components/common/PageTransition";
import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";
import DoctorsStats from "../../components/Doctors/DoctorsStats";
import DoctorsToolbar from "../../components/Doctors/DoctorsToolbar";
import DoctorsTable from "../../components/Doctors/DoctorsTable";
import doctorsData from "../../data/doctorsData";

import "./DoctorsPage.css";

const DoctorsPage = ({
  setSidebarOpen,
  onOpenProfile,
}) => {
  const [doctors, setDoctors] = useState(() => {
    const savedDoctors = localStorage.getItem("hospital-doctors");
    return savedDoctors ? JSON.parse(savedDoctors) : doctorsData;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "hospital-doctors",
      JSON.stringify(doctors)
    );
  }, [doctors]);

  return (
    <PageTransition>
      <section className="doctors-page">
        <DashboardTopBar
      title="Doctors"
      setSidebarOpen={setSidebarOpen}
      onOpenProfile={onOpenProfile}
    />


        <DoctorsStats doctors={doctors} />

        <DoctorsToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          availabilityFilter={availabilityFilter}
          setAvailabilityFilter={setAvailabilityFilter}
        />

        <DoctorsTable
          doctors={doctors}
          setDoctors={setDoctors}
          searchQuery={searchQuery}
          departmentFilter={departmentFilter}
          availabilityFilter={availabilityFilter}
        />
      </section>
    </PageTransition>
  );
};

export default DoctorsPage;
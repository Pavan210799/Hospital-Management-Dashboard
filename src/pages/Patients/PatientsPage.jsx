import { useState } from "react";

import PageTransition from "../../components/common/PageTransition";
import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";
import PatientsStats from "../../components/Patients/PatientsStats";
import PatientsToolbar from "../../components/Patients/PatientsToolbar";
import PatientsTable from "../../components/Patients/PatientsTable";

import "./PatientsPage.css";

const PatientsPage = ({
  setSidebarOpen,
  patients,
  setPatients,
  onOpenProfile,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <PageTransition>
      <section className="patients-page">
        <DashboardTopBar
      title="Patients"
      setSidebarOpen={setSidebarOpen}
      onOpenProfile={onOpenProfile}
    />


        <PatientsStats patients={patients} />

        <PatientsToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <PatientsTable
          patients={patients}
          setPatients={setPatients}
          searchQuery={searchQuery}
          departmentFilter={departmentFilter}
          statusFilter={statusFilter}
        />
      </section>
    </PageTransition>
  );
};

export default PatientsPage;
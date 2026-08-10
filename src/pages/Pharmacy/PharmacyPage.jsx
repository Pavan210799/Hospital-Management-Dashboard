import { useState } from "react";

import PageTransition from "../../components/common/PageTransition";
import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";

import PharmacyStats from "../../components/Pharmacy/PharmacyStats";
import PharmacyToolbar from "../../components/Pharmacy/PharmacyToolbar";
import PharmacyTable from "../../components/Pharmacy/PharmacyTable";
import AddMedicineModal from "../../components/Pharmacy/AddMedicineModal";

import { pharmacyData } from "../../data/pharmacyData";

import "./PharmacyPage.css";

const PharmacyPage = ({
  setSidebarOpen,
  onOpenProfile,
}) => {
  const [medicines, setMedicines] = useState(pharmacyData);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <PageTransition>
      <section className="pharmacy-page">
        <DashboardTopBar
          title="Pharmacy"
          setSidebarOpen={setSidebarOpen}
            onOpenProfile={onOpenProfile}
      
        />

        <div className="pharmacy-content">
          <PharmacyStats medicines={medicines} />

          <PharmacyToolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            onAddMedicine={() => setIsAddOpen(true)}
          />

          <PharmacyTable
            medicines={medicines}
            setMedicines={setMedicines}
            searchQuery={searchQuery}
            categoryFilter={categoryFilter}
            statusFilter={statusFilter}
          />
        </div>

        <AddMedicineModal
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          medicines={medicines}
          setMedicines={setMedicines}
        />
      </section>
    </PageTransition>
  );
};

export default PharmacyPage;
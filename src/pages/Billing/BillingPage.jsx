import { useMemo, useState } from "react";

import PageTransition from "../../components/common/PageTransition";
import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";

import BillingStats from "../../components/Billing/BillingStats";
import BillingToolbar from "../../components/Billing/BillingToolbar";
import BillingTable from "../../components/Billing/BillingTable";
import CreateInvoiceModal from "../../components/Billing/CreateInvoiceModal";

import "./BillingPage.css";

const BillingPage = ({
  setSidebarOpen,
  invoices,
  setInvoices,
  patients,
  onOpenProfile,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredInvoices = useMemo(() => {
    const query = (searchQuery || "").toLowerCase();

    return invoices.filter((invoice) => {
      const matchesSearch =
        invoice.patientName.toLowerCase().includes(query) ||
        invoice.id.toLowerCase().includes(query) ||
        invoice.patientId.toLowerCase().includes(query) ||
        invoice.doctorName.toLowerCase().includes(query);

      const matchesDepartment =
        departmentFilter === "All" ||
        invoice.department === departmentFilter;

      const matchesStatus =
        statusFilter === "All" ||
        invoice.status === statusFilter;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }, [
    invoices,
    searchQuery,
    departmentFilter,
    statusFilter,
  ]);

  const nextInvoiceId = useMemo(() => {
    const lastInvoice = invoices[invoices.length - 1];

    if (!lastInvoice) return "MCI001";

    const lastNumber = parseInt(
      lastInvoice.id.replace("MCI", ""),
      10
    );

    return `MCI${String(lastNumber + 1).padStart(3, "0")}`;
  }, [invoices]);

  const handleCreateInvoice = (newInvoice) => {
    setInvoices((prev) => [newInvoice, ...prev]);
  };

  return (
    <PageTransition>
      <section className="billing-page">
        <DashboardTopBar
      title="Billing"
      setSidebarOpen={setSidebarOpen}
      onOpenProfile={onOpenProfile}
    />


        <div className="billing-content">
          <BillingStats invoices={invoices} />

          <BillingToolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            onCreateInvoice={() => setIsModalOpen(true)}
          />

          <BillingTable
            invoices={filteredInvoices}
            onCreateInvoice={() => setIsModalOpen(true)}
          />
        </div>

        <CreateInvoiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateInvoice}
          nextInvoiceId={nextInvoiceId}
          patients={patients}
        />
      </section>
    </PageTransition>
  );
};

export default BillingPage;
import "./BillingToolbar.css";

const statusOptions = [
  "All",
  "Paid",
  "Pending",
  "Overdue",
];

const BillingToolbar = ({
  searchQuery,
  setSearchQuery,
  departmentFilter,
  setDepartmentFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <section className="billing-toolbar">
      <div className="billing-toolbar-top">
        <div className="billing-toolbar-search">
          <input
            type="text"
            placeholder="Search by invoice ID, patient, doctor..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
          />
        </div>

        <div className="billing-toolbar-department">
          <select
            value={departmentFilter}
            onChange={(e) =>
              setDepartmentFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Cardiology</option>
            <option>General Medicine</option>
            <option>Orthopedics</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>Gynecology</option>
            <option>Emergency</option>
            <option>Dermatology</option>
          </select>
        </div>
      </div>

      <div className="billing-toolbar-bottom">
        <span className="billing-toolbar-label">
          Status
        </span>

        <div className="billing-status-chips">
          {statusOptions.map((status) => (
            <button
              key={status}
              type="button"
              className={`billing-status-chip ${
                statusFilter === status
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setStatusFilter(status)
              }
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingToolbar;
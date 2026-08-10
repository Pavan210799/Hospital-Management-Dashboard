import { FaMagnifyingGlass } from "react-icons/fa6";
import "./PatientsToolbar.css";

const PatientsToolbar = ({
  searchQuery,
  setSearchQuery,
  departmentFilter,
  setDepartmentFilter,
  statusFilter,
  setStatusFilter,
}) => {
  const statusOptions = [
    "All",
    "OP",
    "Admitted",
    "Discharged",
  ];

  const clearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("All");
    setStatusFilter("All");
  };

  return (
    <section className="patients-toolbar-card">
      <div className="patients-toolbar-top">
        <div className="patients-search-wrapper">
          <FaMagnifyingGlass className="patients-search-icon" />

          <input
            type="text"
            placeholder="Search by patient name, ID, disease, or doctor"
            className="patients-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="patients-toolbar-filter"
          value={departmentFilter}
          onChange={(e) =>
            setDepartmentFilter(e.target.value)
          }
        >
          <option value="All">
            All Departments
          </option>
          <option value="Cardiology">
            Cardiology
          </option>
          <option value="Neurology">
            Neurology
          </option>
          <option value="Orthopedics">
            Orthopedics
          </option>
          <option value="General Medicine">
            General Medicine
          </option>
          <option value="Pediatrics">
            Pediatrics
          </option>
          <option value="Pulmonology">
            Pulmonology
          </option>
          <option value="Dermatology">
            Dermatology
          </option>
          <option value="ENT">ENT</option>
        </select>
      </div>

      <div className="patients-toolbar-divider" />

      <div className="patients-toolbar-bottom">
        <div className="patients-status-filters">
          <span className="patients-status-label">
            Status
          </span>

          {statusOptions.map((status) => (
            <button
              key={status}
              className={`patients-status-chip ${
                statusFilter === status ? "active" : ""
              }`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <button
          className="patients-clear-filters"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default PatientsToolbar;


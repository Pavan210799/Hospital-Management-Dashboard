import "./DoctorsToolbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const DoctorsToolbar = ({
  searchQuery,
  setSearchQuery,
  departmentFilter,
  setDepartmentFilter,
  availabilityFilter,
  setAvailabilityFilter,
}) => {
  const availabilityOptions = [
    "All",
    "Available",
    "Busy",
    "On Leave",
  ];

  const clearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("All");
    setAvailabilityFilter("All");
  };

  return (
    <section className="doctors-toolbar-card">
      <div className="doctors-toolbar-top">
        <div className="doctors-search-wrapper">
          <FaMagnifyingGlass className="doctors-search-icon" />
          <input
            type="text"
            placeholder="Search by doctor name, ID, or specialty"
            className="doctors-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="doctors-toolbar-filter"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="General Medicine">General Medicine</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="ENT">ENT</option>
        </select>
      </div>

      <div className="doctors-toolbar-divider" />

      <div className="doctors-toolbar-bottom">
        <div className="doctors-status-filters">
          <span className="doctors-status-label">Availability</span>

          {availabilityOptions.map((status) => (
            <button
              key={status}
              type="button"
              className={`doctors-status-chip ${
                availabilityFilter === status ? "active" : ""
              }`}
              onClick={() => setAvailabilityFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="doctors-clear-filters"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default DoctorsToolbar;
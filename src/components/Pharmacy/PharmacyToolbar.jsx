import { motion } from "framer-motion";
import "./PharmacyToolbar.css";

const PharmacyToolbar = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  onAddMedicine,
}) => {
  return (
    <section className="pharmacy-toolbar">
      <div className="pharmacy-toolbar-left">
        <input
          type="text"
          placeholder="Search medicine, ID, supplier..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pharmacy-search-input"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="pharmacy-filter-select"
        >
          <option value="All">All Categories</option>
          <option value="Antibiotic">Antibiotic</option>
          <option value="Analgesic">Analgesic</option>
          <option value="Antipyretic">Antipyretic</option>
          <option value="Antidiabetic">Antidiabetic</option>
          <option value="Cardiac">Cardiac</option>
          <option value="Vitamin">Vitamin</option>
          <option value="Injection">Injection</option>
          <option value="Emergency">Emergency</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="pharmacy-filter-select"
        >
          <option value="All">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      <motion.button
        className="pharmacy-add-btn"
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          duration: 0.05,
          ease: "easeOut",
        }}
        onClick={onAddMedicine}
      >
        + Add Medicine
      </motion.button>
    </section>
  );
};

export default PharmacyToolbar;
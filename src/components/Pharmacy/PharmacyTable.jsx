import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./PharmacyTable.css";

const PharmacyTable = ({
  medicines,
  setMedicines,
  searchQuery,
  categoryFilter,
  statusFilter,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, statusFilter]);

  const tableRef = useRef(null);

  const medicinesPerPage = 10;

  const filteredMedicines = medicines.filter((medicine) => {
    const search = searchQuery.toLowerCase();

    const matchesSearch =
      medicine.name.toLowerCase().includes(search) ||
      medicine.id.toLowerCase().includes(search) ||
      medicine.supplier.toLowerCase().includes(search);

    const matchesCategory =
      categoryFilter === "All" || medicine.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" || medicine.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const sortedMedicines = [...filteredMedicines].sort((a, b) => {
    const aId = parseInt(a.id.replace("MCM", ""), 10);
    const bId = parseInt(b.id.replace("MCM", ""), 10);
    return aId - bId;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(sortedMedicines.length / medicinesPerPage)
  );

  const startIndex = (currentPage - 1) * medicinesPerPage;

  const currentMedicines = sortedMedicines.slice(
    startIndex,
    startIndex + medicinesPerPage
  );

  const handlePageChange = (page) => {
    if (page === currentPage || page < 1 || page > totalPages) return;

    setCurrentPage(page);

    requestAnimationFrame(() => {
      tableRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const updateStock = (medicineId, change) => {
    setMedicines((prev) =>
      prev.map((medicine) => {
        if (medicine.id !== medicineId) return medicine;

        const newStock = Math.max(0, medicine.stock + change);

        let status = "In Stock";
        if (newStock === 0) status = "Out of Stock";
        else if (newStock <= medicine.reorderLevel) status = "Low Stock";

        return {
          ...medicine,
          stock: newStock,
          status,
        };
      })
    );
  };

  return (
    <section className="pharmacy-table-card" ref={tableRef}>
      <div className="pharmacy-table-header">
        <div>
          <h3>Medicine inventory</h3>
          <p>Manage stock levels, expiry dates, and suppliers</p>
        </div>
      </div>

      <div className="pharmacy-table-wrapper">
        <table className="pharmacy-table">
          <thead>
            <tr>
              <th>Medicine ID</th>
              <th>Medicine</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Expiry</th>
              <th>Supplier</th>
              <th>Price</th>
            </tr>
          </thead>

          <motion.tbody
            key={currentPage}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {currentMedicines.length === 0 ? (
              <tr>
                <td colSpan="8" className="pharmacy-empty-state">
                  No medicines found
                </td>
              </tr>
            ) : (
              currentMedicines.map((medicine) => (
                <motion.tr
                  key={medicine.id}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{
                    duration: 0.05,
                    ease: [0.05, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale : 1.02,
                    y: -2,
                    transition: {
                        duration: 0.05,
                        ease: "easeOut",
                    },
                }}
                >
                  <td className="medicine-id">{medicine.id}</td>
                  <td className="medicine-name">{medicine.name}</td>
                  <td>{medicine.category}</td>

                  <td>
                    <div className="stock-editor">
                      <button
                        onClick={() => updateStock(medicine.id, -1)}
                      >
                        −
                      </button>

                      <span>{medicine.stock}</span>

                      <button
                        onClick={() => updateStock(medicine.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`medicine-status ${medicine.status
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {medicine.status}
                    </span>
                  </td>

                  <td>{medicine.expiryDate}</td>
                  <td>{medicine.supplier}</td>
                  <td>₹{medicine.unitPrice}</td>
                </motion.tr>
              ))
            )}
          </motion.tbody>
        </table>
      </div>

      <div className="pharmacy-pagination">
        <p>
          Showing {sortedMedicines.length === 0 ? 0 : startIndex + 1}–
          {Math.min(
            startIndex + medicinesPerPage,
            sortedMedicines.length
          )} of {sortedMedicines.length} medicines
        </p>

        <div className="pharmacy-pagination-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {getVisiblePages().map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="pharmacy-pagination-ellipsis"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PharmacyTable;
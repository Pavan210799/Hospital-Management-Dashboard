import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./BedGrid.css";

const BEDS_PER_PAGE = 10;

const BedGrid = ({ beds, onBedClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [beds]);

  const totalPages = Math.max(
    1,
    Math.ceil(beds.length / BEDS_PER_PAGE)
  );

  const startIndex = (currentPage - 1) * BEDS_PER_PAGE;

  const currentBeds = beds.slice(
    startIndex,
    startIndex + BEDS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (
      page === currentPage ||
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
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

  return (
    <div className="bed-grid-wrapper">
      <div className="bed-grid">
        {currentBeds.map((bed, index) => (
          <motion.div
            key={bed.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: index * 0.02,
            }}
          >
            <motion.div
              className={`bed-card ${
                bed.occupied ? "occupied" : "available"
              }`}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 900,
                  damping: 18,
                  mass: 0.35,
                },
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() =>
                bed.occupied && onBedClick(bed)
              }
            >
              <div className="bed-card-header">
                <strong>{bed.id}</strong>

                <span
                  className={`bed-status ${
                    bed.occupied ? "occupied" : "available"
                  }`}
                >
                  {bed.occupied
                    ? "Occupied"
                    : "Available"}
                </span>
              </div>

              {bed.occupied ? (
                <div className="bed-card-body">
                  <strong>{bed.patient.name}</strong>

                  <p>
                    {bed.patient.id} • {bed.patient.gender}, {bed.patient.age}
                  </p>

                  <p>{bed.patient.doctorName}</p>
                </div>
              ) : (
                <div className="bed-card-body">
                  <p>Ready for admission</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="bed-pagination">
          <p>
            Showing {beds.length === 0 ? 0 : startIndex + 1}-
            {Math.min(
              startIndex + BEDS_PER_PAGE,
              beds.length
            )} of {beds.length} beds
          </p>

          <div className="bed-pagination-controls">
            <button
              onClick={() =>
                handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {getVisiblePages().map((page, index) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="bed-pagination-ellipsis"
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  className={
                    currentPage === page ? "active" : ""
                  }
                  onClick={() =>
                    handlePageChange(page)
                  }
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() =>
                handlePageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BedGrid;
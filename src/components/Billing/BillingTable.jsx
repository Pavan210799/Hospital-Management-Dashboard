import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./BillingTable.css";

const invoicesPerPage = 10;

const BillingTable = ({
  invoices,
  onCreateInvoice,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const tableRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [invoices]);

  const sortedInvoices = useMemo(() => {
    return [...invoices].sort((a, b) => {
      const aId = parseInt(a.id.replace("MCI", ""), 10);
      const bId = parseInt(b.id.replace("MCI", ""), 10);
      return bId - aId;
    });
  }, [invoices]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedInvoices.length / invoicesPerPage)
  );

  const startIndex = (currentPage - 1) * invoicesPerPage;

  const currentInvoices = sortedInvoices.slice(
    startIndex,
    startIndex + invoicesPerPage
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

    requestAnimationFrame(() => {
      tableRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
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
    <section
      className="billing-table-card"
      ref={tableRef}
    >
      <div className="billing-table-header">
        <div>
          <h3>Invoice directory</h3>
          <p>Complete billing records</p>
        </div>

        <motion.button
          className="billing-table-add-btn"
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
          onClick={onCreateInvoice}
        >
          + Create Invoice
        </motion.button>
      </div>

      <div className="billing-table-wrapper">
        <table className="billing-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Patient</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Due date</th>
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
            {currentInvoices.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="billing-empty-state"
                >
                  No invoices found
                </td>
              </tr>
            ) : (
              currentInvoices.map((invoice) => (
                <motion.tr
                  key={invoice.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 24,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2 }}
                  className="billing-table-row"
                  onClick={() =>
                    navigate(`/billing/${invoice.id}`)
                  }
                >
                  <td className="invoice-id">
                    {invoice.id}
                  </td>

                  <td className="invoice-patient">
                    <strong>{invoice.patientName}</strong>
                    <p>{invoice.patientId}</p>
                  </td>

                  <td>{invoice.department}</td>

                  <td>{invoice.doctorName}</td>

                  <td className="invoice-amount">
                    ₹{invoice.amount.toLocaleString("en-IN")}
                  </td>

                  <td>
                    <span
                      className={`invoice-status ${invoice.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {invoice.status}
                    </span>
                  </td>

                  <td>{invoice.paymentMethod}</td>

                  <td>
                    {invoice.dueDate}
                  </td>
                </motion.tr>
              ))
            )}
          </motion.tbody>
        </table>
      </div>

      <div className="billing-pagination">
        <p>
          Showing {sortedInvoices.length === 0 ? 0 : startIndex + 1}–
          {Math.min(
            startIndex + invoicesPerPage,
            sortedInvoices.length
          )} of {sortedInvoices.length} invoices
        </p>

        <div className="billing-pagination-controls">
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
                className="billing-pagination-ellipsis"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                className={
                  currentPage === page
                    ? "active"
                    : ""
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
    </section>
  );
};

export default BillingTable;
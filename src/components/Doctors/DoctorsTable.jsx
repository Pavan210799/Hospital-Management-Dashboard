import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPen, FaTrash } from "react-icons/fa6";

import AddDoctorModal from "./AddDoctorModal";
import EditDoctorModal from "./EditDoctorModal";
import DoctorProfileModal from "./DoctorProfileModal";

import doctorsData from "../../data/doctorsData";

import "./DoctorsTable.css";

const DoctorsTable = ({
  doctors,
  setDoctors,
  searchQuery,
  departmentFilter,
  availabilityFilter,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const tableRef = useRef(null);
  const doctorsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, departmentFilter, availabilityFilter]);

  const filteredDoctors = doctors.filter((doctor) => {
    const search = searchQuery.toLowerCase();

    const matchesSearch =
      doctor.name.toLowerCase().includes(search) ||
      doctor.id.toLowerCase().includes(search) ||
      doctor.specialization.toLowerCase().includes(search);

    const matchesDepartment =
      departmentFilter === "All" ||
      doctor.department === departmentFilter;

    const matchesAvailability =
      availabilityFilter === "All" ||
      doctor.availability === availabilityFilter;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesAvailability
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredDoctors.length / doctorsPerPage)
  );

  const startIndex = (currentPage - 1) * doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + doctorsPerPage
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
    <>
      <section
        className="doctors-table-card"
        ref={tableRef}
      >
        <div className="doctors-table-header">
          <div>
            <h3>Doctor directory</h3>
            <p>Hospital doctors and specialists</p>
          </div>

          <motion.button
            className="doctors-table-add-btn"
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              duration: 0.05,
              ease: "easeOut",
            }}
            onClick={() =>
              setIsAddModalOpen(true)
            }
          >
            + Add Doctor
          </motion.button>
        </div>

        <div className="doctors-table-wrapper">
          <table className="doctors-table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Department</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Patients</th>
                <th>Today</th>
                <th>Status</th>
                <th>Profile</th>
                <th className="doctors-actions-col"></th>
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
              {currentDoctors.length === 0 ? (
                <tr>
                  <td
                    colSpan="9"
                    className="doctors-empty-state"
                  >
                    No doctors found
                  </td>
                </tr>
              ) : (
                currentDoctors.map((doctor) => (
                  <motion.tr
                    key={doctor.id}
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
                  >
                    <td className="doctor-info-cell">
                      {doctor.image ? (
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="doctor-avatar"
                        />
                        ) : (
                        <div className="doctor-avatar doctor-avatar-fallback">
                            {doctor.name
                            .replace(/^Dr\.?\s*/i, "")
                            .trim()
                            .charAt(0)
                            .toUpperCase()}
                        </div>
                        )}

                      <div>
                        <p className="doctor-name">
                          {doctor.name}
                        </p>
                        <span className="doctor-id">
                          {doctor.id}
                        </span>
                      </div>
                    </td>

                    <td>{doctor.department}</td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.experience}</td>
                    <td>{doctor.patients}</td>
                    <td>
                      {doctor.appointmentsToday}
                    </td>

                    <td>
                      <span
                        className={`doctor-status ${doctor.availability
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {doctor.availability}
                      </span>
                    </td>

                    <td>
                      <button
                        className="doctor-profile-link"
                        onClick={() => {
                          setSelectedDoctor(doctor);
                          setIsProfileOpen(true);
                        }}
                      >
                        View
                      </button>
                    </td>

                    <td className="doctors-actions-cell">
                      <div className="doctors-inline-actions">
                        <button
                          className="doctors-action-icon edit"
                          title="Edit doctor"
                          onClick={() => {
                            setSelectedDoctor(doctor);
                            setIsEditOpen(true);
                          }}
                        >
                          <FaPen />
                        </button>

                        {!doctorsData.some(
                          (d) => d.id === doctor.id
                        ) && (
                          <>
                            <span className="doctors-action-divider">
                              |
                            </span>
                            <button
                              className="doctors-action-icon delete"
                              title="Delete doctor"
                              onClick={() => {
                                const confirmed = window.confirm(
                                  `Delete doctor record for ${doctor.name}?`
                                );

                                if (!confirmed) return;

                                setDoctors((prevDoctors) =>
                                  prevDoctors.filter(
                                    (d) =>
                                      d.id !== doctor.id
                                  )
                                );
                              }}
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </motion.tbody>
          </table>
        </div>

        <div className="doctors-pagination">
          <p>
            Showing {filteredDoctors.length === 0 ? 0 : startIndex + 1}–
            {Math.min(
              startIndex + doctorsPerPage,
              filteredDoctors.length
            )} of {filteredDoctors.length} doctors
          </p>

          <div className="doctors-pagination-controls">
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
                  className="doctors-pagination-ellipsis"
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

      <AddDoctorModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        doctors={doctors}
        setDoctors={setDoctors}
      />

      <DoctorProfileModal
        isOpen={isProfileOpen}
        onClose={() => {
          setIsProfileOpen(false);
          setSelectedDoctor(null);
        }}
        doctor={selectedDoctor}
      />

      <EditDoctorModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedDoctor(null);
        }}
        doctor={selectedDoctor}
        setDoctors={setDoctors}
      />
    </>
  );
};

export default DoctorsTable;
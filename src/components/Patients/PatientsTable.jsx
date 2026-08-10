import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaPen } from "react-icons/fa6";

import { patientsPageRecords } from "./patientsPageData";
import AddPatientModal from "./AddPatientModal";
import ViewHistoryModal from "./ViewHistoryModal";
import AddDiagnosisModal from "./AddDiagnosisModal";
import EditPatientModal from "./EditPatientModal";

import "./PatientsTable.css";

const PatientsTable = ({
  patients,
  setPatients,
  searchQuery,
  departmentFilter,
  statusFilter,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
    const [diagnosisPatient, setDiagnosisPatient] = useState(null);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editPatient, setEditPatient] = useState(null);

    useEffect(() => {
    setCurrentPage(1);
    }, [searchQuery, departmentFilter, statusFilter]);

    const tableRef = useRef(null);

    const patientsPerPage = 10;

    const filteredPatients = patients.filter((patient) => {
    const search = searchQuery.toLowerCase();

    const matchesSearch =
        patient.name.toLowerCase().includes(search) ||
        patient.id.toLowerCase().includes(search) ||
        patient.doctorName.toLowerCase().includes(search) ||
        patient.disease.toLowerCase().includes(search);

    const matchesDepartment =
        departmentFilter === "All" ||
        patient.department === departmentFilter;

    const matchesStatus =
        statusFilter === "All" ||
        patient.status === statusFilter;

    return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
    );
    });

    const sortedPatients = [...filteredPatients].sort((a, b) => {
    const aId = parseInt(a.id.replace("MCP", ""), 10);
    const bId = parseInt(b.id.replace("MCP", ""), 10);
    return bId - aId;
    });

    const totalPages = Math.max(
    1,
    Math.ceil(sortedPatients.length / patientsPerPage)
);

    const startIndex = (currentPage - 1) * patientsPerPage;

    const currentPatients = sortedPatients.slice(
        startIndex,
        startIndex + patientsPerPage
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
            className="patients-table-card"
            ref={tableRef}
        >
            <div className="patients-table-header">
                <div>
                    <h3>Patient directory</h3>
                    <p>Complete patient records</p>
                </div>

                <motion.button
                    className="patients-table-add-btn"
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
                    onClick={() => {
                    
                        setIsAddModalOpen(true);
                    }}
                >

                    + Add Patient

                </motion.button>
            </div>

            <div className="patients-table-wrapper">
                <table className="patients-table">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Disease</th>
                            <th>Doctor</th>
                            <th>History</th>
                            <th className="patients-actions-col"></th>
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
                        {currentPatients.length === 0 ? (
                            <tr>
                            <td
                                colSpan="8"
                                className="patients-empty-state"
                            >
                                No patients found
                            </td>
                            </tr>
                        ) : (
                            currentPatients.map((patient) => {
                            const patientNumber = parseInt(
                                patient.id.replace("MCP", ""),
                                10
                            );

                            return (
                                <motion.tr
                                key={patient.id}
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
                                <td className="patient-id">
                                    {patient.id}
                                </td>
                                <td className="patient-name">
                                    {patient.name}
                                </td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td className="patient-disease">
                                    {patient.disease}
                                </td>
                                <td>{patient.doctorName}</td>

                                <td>
                                    <button
                                    className="patients-history-link"
                                    onClick={() => {
                                        setSelectedPatient(patient);
                                        setIsHistoryOpen(true);
                                    }}
                                    >
                                    View
                                    </button>
                                </td>

                                <td className="patients-actions-cell">
                                    <div className="patients-inline-actions">
                                    <button
                                        className="patients-action-icon add"
                                        title="Add diagnosis"
                                        onClick={() => {
                                            setDiagnosisPatient(patient);
                                            setIsDiagnosisOpen(true);
                                        }}
                                        >
                                        <FaPlus />
                                        </button>

                                        <span className="patients-action-divider">|</span>

                                        <button
                                        className="patients-action-icon edit"
                                        title="Edit patient"
                                        onClick={() => {
                                            setEditPatient(patient);
                                            setIsEditOpen(true);
                                        }}
                                        >
                                        <FaPen />
                                        </button>

                                        {patientNumber >= 225 && (
                                        <>
                                            <span className="patients-action-divider">|</span>
                                            <button
                                            className="patients-action-icon delete"
                                            title="Delete patient"
                                            onClick={() => {
                                                if (
                                                window.confirm(
                                                    `Delete patient record for ${patient.name}?`
                                                )
                                                ) {
                                                setPatients((prev) =>
                                                    prev.filter((p) => p.id !== patient.id)
                                                );
                                                }
                                            }}
                                            >
                                            <FaTrash />
                                            </button>
                                        </>
                                        )}
                                    </div>
                                </td>
                                </motion.tr>
                            );
                            })
                        )}
                        </motion.tbody>
                </table>
            </div>

            <div className="patients-pagination">
                <p>
                    Showing {sortedPatients.length === 0 ? 0 : startIndex + 1}–
                    {Math.min(
                        startIndex + patientsPerPage,
                        sortedPatients.length
                    )} of {sortedPatients.length} patients
                </p>

                <div className="patients-pagination-controls">
                    <button
                        onClick={() =>
                            handlePageChange(
                                currentPage - 1
                            )
                        }
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {getVisiblePages().map((page, index) =>
                        page === "..." ? (
                            <span
                                key={`ellipsis-${index}`}
                                className="patients-pagination-ellipsis"
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
                            handlePageChange(
                                currentPage + 1
                            )
                        }
                        disabled={
                            currentPage === totalPages
                        }
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
        <AddPatientModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            patients={patients}
            setPatients={setPatients}
        />

        <ViewHistoryModal
            isOpen={isHistoryOpen}
            onClose={() => {
                setIsHistoryOpen(false);
                setSelectedPatient(null);
            }}
            patient={selectedPatient}
        />

        <AddDiagnosisModal
            isOpen={isDiagnosisOpen}
            onClose={() => {
                setIsDiagnosisOpen(false);
                setDiagnosisPatient(null);
            }}
            patient={diagnosisPatient}
            setPatients={setPatients}
        />

        <EditPatientModal
            isOpen={isEditOpen}
            onClose={() => {
                setIsEditOpen(false);
                setEditPatient(null);
            }}
            patient={editPatient}
            setPatients={setPatients}
        />
    </>
    );
};

export default PatientsTable;
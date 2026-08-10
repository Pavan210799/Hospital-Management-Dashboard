import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./CreateInvoiceModal.css";

const CreateInvoiceModal = ({
  isOpen,
  onClose,
  onCreate,
  nextInvoiceId,
  patients,
}) => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    department: "General Medicine",
    doctorName: "",
    amount: "",
    paymentMethod: "Cash",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "patientId") {
        const patient = patients.find(
        (p) => p.id.toLowerCase() === value.toLowerCase()
        );

        if (patient) {
        setFormData((prev) => ({
            ...prev,
            patientId: value.toUpperCase(),
            patientName: patient.name || "",
            department: patient.department || "General Medicine",
            doctorName: patient.doctorName || "",
        }));
        return;
        }

        setFormData((prev) => ({
        ...prev,
        patientId: value.toUpperCase(),
        patientName: "",
        department: "General Medicine",
        doctorName: "",
        }));
        return;
    }

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const due = new Date();
    due.setDate(today.getDate() + 7);

    onCreate({
      id: nextInvoiceId,
      ...formData,
      amount: Number(formData.amount),
      invoiceDate: today.toLocaleDateString("en-IN"),
      dueDate: due.toLocaleDateString("en-IN"),
    });

    setFormData({
      patientName: "",
      patientId: "",
      department: "General Medicine",
      doctorName: "",
      amount: "",
      paymentMethod: "Cash",
      status: "Pending",
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="invoice-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="invoice-modal"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="invoice-modal-header">
              <div>
                <h3>Create Invoice</h3>
                <p>Generate a new patient billing invoice</p>
              </div>

              <button
                type="button"
                onClick={onClose}
              >
                ×
              </button>
            </div>

            <form
              className="invoice-modal-form"
              onSubmit={handleSubmit}
            >
              <div className="invoice-form-grid">
                <div className="invoice-form-group">
                  <label>Invoice ID</label>
                  <input
                    value={nextInvoiceId}
                    disabled
                  />
                </div>

                <div className="invoice-form-group">
                  <label>Patient ID</label>
                  <input
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    placeholder="MCP101"
                    required
                  />
                </div>

                <div className="invoice-form-group invoice-form-group-full">
                  <label>Patient Name</label>
                  <input
                    name="patientName"
                    value={formData.patientName}
                    placeholder="Auto-filled from Patient ID"
                    readOnly
                  />
                </div>

                <div className="invoice-form-group">
                  <label>Department</label>
                  <input
                    name="department"
                    value={formData.department}
                    readOnly
                  />
                </div>

                <div className="invoice-form-group">
                  <label>Doctor Name</label>
                  <input
                    name="doctorName"
                    value={formData.doctorName}
                    placeholder="Auto-filled from Patient ID"
                    readOnly
                  />
                </div>

                <div className="invoice-form-group">
                  <label>Amount (₹)</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="15000"
                    required
                  />
                </div>

                <div className="invoice-form-group">
                  <label>Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option>Cash</option>
                    <option>Card</option>
                    <option>UPI</option>
                    <option>Insurance</option>
                    <option>Net Banking</option>
                  </select>
                </div>

                <div className="invoice-form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Pending</option>
                    <option>Paid</option>
                    <option>Overdue</option>
                  </select>
                </div>
              </div>

              <div className="invoice-modal-actions">
                <button
                  type="button"
                  className="invoice-cancel-btn"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="invoice-submit-btn"
                >
                  Create Invoice
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateInvoiceModal;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AddMedicineModal.css";

const AddMedicineModal = ({
  isOpen,
  onClose,
  medicines,
  setMedicines,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Antibiotic",
    stock: "",
    reorderLevel: "",
    expiryDate: "",
    supplier: "",
    unitPrice: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        category: "Antibiotic",
        stock: "",
        reorderLevel: "",
        expiryDate: "",
        supplier: "",
        unitPrice: "",
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stock = Number(formData.stock);
    const reorderLevel = Number(formData.reorderLevel);

    let status = "In Stock";
    if (stock === 0) status = "Out of Stock";
    else if (stock <= reorderLevel) status = "Low Stock";

    const lastId = medicines.length
      ? Math.max(
          ...medicines.map((medicine) =>
            Number(medicine.id.replace("MCM", ""))
          )
        )
      : 0;

    const newMedicine = {
      id: `MCM${String(lastId + 1).padStart(3, "0")}`,
      name: formData.name,
      category: formData.category,
      stock,
      reorderLevel,
      expiryDate: formData.expiryDate,
      supplier: formData.supplier,
      unitPrice: Number(formData.unitPrice),
      batch: `BATCH${Date.now().toString().slice(-4)}`,
      status,
    };

    setMedicines((prev) => [...prev, newMedicine]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="medicine-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="medicine-modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="medicine-modal-header">
              <h3>Add medicine</h3>
              <button onClick={onClose}>×</button>
            </div>

            <form
              className="medicine-modal-form"
              onSubmit={handleSubmit}
            >
              <div className="medicine-form-grid">
                <div className="medicine-form-group medicine-form-group-full">
                  <label>Medicine name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter medicine name"
                    required
                  />
                </div>

                <div className="medicine-form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option>Antibiotic</option>
                    <option>Analgesic</option>
                    <option>Antipyretic</option>
                    <option>Antidiabetic</option>
                    <option>Cardiac</option>
                    <option>Vitamin</option>
                    <option>Injection</option>
                    <option>Emergency</option>
                  </select>
                </div>

                <div className="medicine-form-group">
                  <label>Supplier</label>
                  <input
                    type="text"
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleChange}
                    placeholder="Supplier name"
                    required
                  />
                </div>

                <div className="medicine-form-group">
                  <label>Initial stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="medicine-form-group">
                  <label>Reorder level</label>
                  <input
                    type="number"
                    name="reorderLevel"
                    value={formData.reorderLevel}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="medicine-form-group">
                  <label>Expiry date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="medicine-form-group">
                  <label>Unit price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="unitPrice"
                    value={formData.unitPrice}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="medicine-modal-actions">
                <button
                  type="button"
                  className="medicine-cancel-btn"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="medicine-submit-btn"
                >
                  Add medicine
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddMedicineModal;
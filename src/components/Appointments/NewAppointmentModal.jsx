import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaXmark } from "react-icons/fa6";
import doctorsData from "../../data/doctorsData";
import "./NewAppointmentModal.css";

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

const formatTime = (time) => {
  const [hour, minute] = time.split(":");
  const h = Number(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 || 12;
  return `${displayHour}:${minute} ${suffix}`;
};

const NewAppointmentModal = ({
  isOpen,
  onClose,
  appointments,
  setAppointments,
}) => {
  const today = new Date().toISOString().split("T")[0];

  const [step, setStep] = useState(1);

  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");

  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [error, setError] = useState("");

  const selectedDoctor = useMemo(
    () => doctorsData.find((doctor) => doctor.id === doctorId),
    [doctorId]
  );

  const resetForm = () => {
    setStep(1);
    setDoctorId("");
    setDate(today);
    setTime("");
    setPatientName("");
    setAge("");
    setGender("");
    setPhone("");
    setNotes("");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleStepOne = () => {
    setError("");

    if (!doctorId || !date || !time) {
      setError("Please select doctor, date, and time.");
      return;
    }

    const exists = appointments.some(
      (appointment) =>
        appointment.doctorId === doctorId &&
        appointment.date === date &&
        appointment.time === time
    );

    if (exists) {
      setError(
        `${selectedDoctor?.name || "Selected doctor"} already has an appointment at ${formatTime(
          time
        )}.`
      );
      return;
    }

    setStep(2);
    setError("");
  };

  const handleSaveAppointment = () => {
    setError("");

    if (!patientName || !age || !gender || !phone) {
      setError(
        "Please fill patient name, age, gender, and phone number."
      );
      return;
    }

    const nextNumber = appointments.length + 1;

    const newAppointment = {
      id: `MCA${String(nextNumber).padStart(3, "0")}`,
      patientId: `MCP${String(nextNumber).padStart(3, "0")}`,
      patientName,
      age: Number(age),
      gender,
      phone,
      doctorId,
      doctorName: selectedDoctor.name,
      department: selectedDoctor.department,
      date,
      time,
      duration: 30,
      type: "Consultation",
      status: "Confirmed",
      notes,
      isCustom: true,
    };

    setAppointments((prev) => [...prev, newAppointment]);

    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="new-appointment-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="new-appointment-modal-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="new-appointment-modal"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <div className="new-appointment-header">
                <div>
                  <h2>New appointment</h2>
                  <p>Step {step} of 2</p>
                </div>

                <button
                  className="new-appointment-close"
                  onClick={handleClose}
                >
                  <FaXmark />
                </button>
              </div>

              <div className="new-appointment-body">
                {step === 1 ? (
                  <>
                    <div className="new-appointment-field">
                      <label>Select doctor</label>
                      <select
                        value={doctorId}
                        onChange={(e) => setDoctorId(e.target.value)}
                      >
                        <option value="">Choose a doctor</option>
                        {doctorsData.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} • {doctor.department}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="new-appointment-field">
                      <label>Appointment date</label>
                      <input
                        type="date"
                        value={date}
                        min={today}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div className="new-appointment-field">
                      <label>Appointment time</label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option value="">Choose a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {formatTime(slot)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="new-appointment-field">
                      <label>Patient name</label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Enter patient name"
                      />
                    </div>

                    <div className="new-appointment-grid">
                      <div className="new-appointment-field">
                        <label>Age</label>
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="Age"
                        />
                      </div>

                      <div className="new-appointment-field">
                        <label>Gender</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="new-appointment-field">
                      <label>Phone number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="new-appointment-field">
                      <label>Clinical notes (optional)</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add clinical notes"
                      />
                    </div>
                  </>
                )}

                {error && (
                  <p className="new-appointment-error">{error}</p>
                )}
              </div>

              <div className="new-appointment-footer">
                {step === 2 && (
                  <button
                    className="new-appointment-back"
                    onClick={() => setStep(1)}
                  >
                    <FaArrowLeft />
                    Back
                  </button>
                )}

                <button
                  className="new-appointment-cancel"
                  onClick={handleClose}
                >
                  Cancel
                </button>

                {step === 1 ? (
                  <button
                    className="new-appointment-continue"
                    onClick={handleStepOne}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    className="new-appointment-continue"
                    onClick={handleSaveAppointment}
                  >
                    Save appointment
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewAppointmentModal;
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

import signature from "../../assets/images/signature/Signature.png";

import "./InvoiceDetailPage.css";

const InvoiceDetailPage = ({ invoices }) => {
  const navigate = useNavigate();
  const { invoiceId } = useParams();

  const invoice = useMemo(() => {
  return invoices.find((item) => item.id === invoiceId);
}, [invoices, invoiceId]);

  if (!invoice) {
    return (
      <div className="invoice-page">
        <div className="invoice-not-found">
          <h2>Invoice not found</h2>
          <button onClick={() => navigate("/billing")}>
            Back to Billing
          </button>
        </div>
      </div>
    );
  }

  const amountInWords = new Intl.NumberFormat("en-IN").format(invoice.amount);

  return (
    <div className="invoice-page">
      <div className="invoice-actions">
        <button
          className="invoice-back-btn"
          onClick={() => navigate("/billing")}
        >
          Back to Billing
        </button>

        <button
          className="invoice-print-btn"
          onClick={() => window.print()}
        >
          Print Invoice
        </button>
      </div>

      <div className="invoice-paper">
        <div className="invoice-header">
  <div className="invoice-logo-section">
    <img
      src={logo}
      alt="MedCare Hospital"
      className="invoice-logo-image"
    />

    <div className="invoice-brand">
      <h1>MedCare Hospital</h1>
      <p>Multi-Specialty Care Hospital</p>
      <span>Excellence in Healthcare & Patient Care</span>
    </div>
  </div>

  <div className="invoice-hospital-address">
    <strong>MedCare Hospital</strong>
    <p>45 Health Avenue</p>
    <p>Vizianagaram, Andhra Pradesh 535002</p>
    <p>Phone: +91 98765 43210</p>
    <p>Email: billing@medcare.com</p>
    <p>GSTIN: 37AABCM1234F1Z5</p>
  </div>
            </div>

            <div className="invoice-divider"></div>

            <div className="invoice-title">
            <h2>Hospital Tax Invoice</h2>
            <p>Official Medical Billing Invoice</p>
        </div>

        <div className="invoice-divider"></div>

        <div className="invoice-title">
          <h2>Tax Invoice</h2>
        </div>

        <div className="invoice-meta">
          <div>
            <span>Invoice No.</span>
            <strong>{invoice.id}</strong>
          </div>

          <div>
            <span>Invoice Date</span>
            <strong>{invoice.invoiceDate}</strong>
          </div>

          <div>
            <span>Due Date</span>
            <strong>{invoice.dueDate}</strong>
          </div>
        </div>

        <div className="invoice-section">
          <h3>Patient Details</h3>

          <div className="invoice-details-grid">
            <div>
              <span>Patient Name</span>
              <strong>{invoice.patientName}</strong>
            </div>

            <div>
              <span>Patient ID</span>
              <strong>{invoice.patientId}</strong>
            </div>

            <div>
              <span>Department</span>
              <strong>{invoice.department}</strong>
            </div>

            <div>
              <span>Consulting Doctor</span>
              <strong>{invoice.doctorName}</strong>
            </div>

            <div>
              <span>Payment Method</span>
              <strong>{invoice.paymentMethod}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{invoice.status}</strong>
            </div>
          </div>
        </div>

        <div className="invoice-section">
          <h3>Billing Summary</h3>

          <table className="invoice-summary-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Consultation Charges</td>
                <td>
                  ₹{Math.round(invoice.amount * 0.2).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Room Charges</td>
                <td>
                  ₹{Math.round(invoice.amount * 0.45).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Laboratory Tests</td>
                <td>
                  ₹{Math.round(invoice.amount * 0.15).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Medicines & Pharmacy</td>
                <td>
                  ₹{Math.round(invoice.amount * 0.2).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr className="invoice-total-row">
                <td>Total Amount</td>
                <td>₹{invoice.amount.toLocaleString("en-IN")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          <div className="invoice-amount-words">
            <span>Amount in words</span>
            <strong>
              Rupees {amountInWords} Only
            </strong>
          </div>

          <div className="invoice-signature">
            <img
                src={signature}
                alt="Medical Director Signature"
                className="invoice-signature-image"
            />

            <div className="invoice-signature-line"></div>

            <strong>Dr. Rajesh Kumar</strong>
            <p>Medical Director</p>
            <span>Authorized Signature</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailPage;
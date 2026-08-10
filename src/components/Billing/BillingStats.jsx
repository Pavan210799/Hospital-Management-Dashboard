import { FaFileInvoiceDollar, FaCircleCheck, FaClock, FaTriangleExclamation, FaIndianRupeeSign } from "react-icons/fa6";

import "./BillingStats.css";

const BillingStats = ({ invoices }) => {
  const totalInvoices = invoices.length;

  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "Paid"
  ).length;

  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status === "Pending"
  ).length;

  const overdueInvoices = invoices.filter(
    (invoice) => invoice.status === "Overdue"
  ).length;

  const totalRevenue = invoices
    .filter((invoice) => invoice.status === "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  const stats = [
    {
      id: 1,
      title: "Total invoices",
      value: totalInvoices,
      icon: FaFileInvoiceDollar,
    },
    {
      id: 2,
      title: "Paid invoices",
      value: paidInvoices,
      icon: FaCircleCheck,
    },
    {
      id: 3,
      title: "Pending payments",
      value: pendingInvoices,
      icon: FaClock,
    },
    {
      id: 4,
      title: "Overdue invoices",
      value: overdueInvoices,
      icon: FaTriangleExclamation,
    },
    {
      id: 5,
      title: "Total revenue",
      value: `₹${totalRevenue.toLocaleString("en-IN")}`,
      icon: FaIndianRupeeSign,
    },
  ];

  return (
    <section className="billing-stats-grid">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="billing-stat-card"
          >
            <div className="billing-stat-icon">
              <Icon />
            </div>

            <div className="billing-stat-content">
              <h2>{stat.value}</h2>
              <p>{stat.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BillingStats;
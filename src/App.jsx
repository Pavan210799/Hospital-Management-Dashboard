import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/layout/Sidebar/Sidebar";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import PatientsPage from "./pages/Patients/PatientsPage";
import DoctorsPage from "./pages/Doctors/DoctorsPage";
import AppointmentsPage from "./pages/Appointments/AppointmentsPage";
import BedManagementPage from "./pages/BedManagement/BedManagementPage";
import PharmacyPage from "./pages/Pharmacy/PharmacyPage";
import BillingPage from "./pages/Billing/BillingPage";
import InvoiceDetailPage from "./pages/Billing/InvoiceDetailPage";
import ProfileModal from "./components/Profile/ProfileModal";

import ScrollToTop from "./components/common/ScrollToTop";
import { patientsPageRecords } from "./components/Patients/patientsPageData";
import { billingData } from "./data/billingData";

import "./App.css";

const App = () => {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [patients, setPatients] = useState(
    patientsPageRecords
  );
  const [invoices, setInvoices] = useState(billingData);

  const isAuthenticated =
    localStorage.getItem("medcare-auth") === "true";

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

    const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="app">
      {!isAuthPage && isAuthenticated && (
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
      )}

      <main
        className={
          isAuthPage
            ? "auth-main-content"
            : "main-content"
        }
      >
        <ScrollToTop />

        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate
                  to="/"
                  replace
                />
              ) : (
                <LoginPage />
              )
            }
          />

          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate
                  to="/"
                  replace
                />
              ) : (
                <SignupPage />
              )
            }
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard
                  setSidebarOpen={setSidebarOpen}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients"
            element={
              <ProtectedRoute>
                <PatientsPage
                  setSidebarOpen={setSidebarOpen}
                  patients={patients}
                  setPatients={setPatients}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors"
            element={
              <ProtectedRoute>
                <DoctorsPage
                  setSidebarOpen={setSidebarOpen}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <AppointmentsPage
                  setSidebarOpen={setSidebarOpen}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/beds"
            element={
              <ProtectedRoute>
                <BedManagementPage
                  setSidebarOpen={setSidebarOpen}
                  patients={patients}
                  setPatients={setPatients}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pharmacy"
            element={
              <ProtectedRoute>
                <PharmacyPage
                  setSidebarOpen={setSidebarOpen}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/billing"
            element={
              <ProtectedRoute>
                <BillingPage
                  setSidebarOpen={setSidebarOpen}
                  invoices={invoices}
                  setInvoices={setInvoices}
                  patients={patients}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/billing/:invoiceId"
            element={
              <ProtectedRoute>
                <InvoiceDetailPage
                  invoices={invoices}
                />
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route
            path="*"
            element={
              <Navigate
                to={
                  isAuthenticated
                    ? "/"
                    : "/login"
                }
                replace
              />
            }
          />
        </Routes>
      </main>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        />
    </div>
  );
};

export default App;
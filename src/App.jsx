import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
import SignupSuccessPage from "./pages/Auth/SignupSuccessPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";

import ScrollToTop from "./components/common/ScrollToTop";
import { patientsPageRecords } from "./components/Patients/patientsPageData";
import { billingData } from "./data/billingData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App = () => {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [patients, setPatients] = useState(
    patientsPageRecords
  );
  const [invoices, setInvoices] = useState(billingData);

  const isAuthenticated =
    localStorage.getItem("medcare-auth") === "true";

  const isAuthPage = [
  "/login",
  "/signup",
  "/signup-success",
  "/forgot-password",
  "/reset-password",
].includes(location.pathname);

  return (
    <div className="app">
      {!isAuthPage && isAuthenticated && (
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
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

        <AnimatePresence mode="wait">
          <Routes
            location={location}
            key={location.pathname}
          >
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

            <Route
              path="/signup-success"
              element={<SignupSuccessPage />}
            />


            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            <Route
              path="/reset-password"
              element={<ResetPasswordPage />}
            />

            {/* Protected routes */}
            

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard
                    setSidebarOpen={setSidebarOpen}
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
                    onOpenProfile={() =>
                      setIsProfileOpen(true)
                    }
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
        </AnimatePresence>
      </main>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default App;
import Header from "../../components/layout/Header/Header";

import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardStats from "../../components/Dashboard/DashboardStats";
import DashboardAdmissionsChart from "../../components/Dashboard/DashboardAdmissionsChart";
import DashboardDepartmentChart from "../../components/Dashboard/DashboardDepartmentChart";
import DashboardAlerts from "../../components/Dashboard/DashboardAlerts";
import DashboardAppointmentChart from "../../components/Dashboard/DashboardAppointmentChart";

import PageTransition from "../../components/common/PageTransition";

import "./Dashboard.css";

const Dashboard = ({
  setSidebarOpen,
  onOpenProfile,
}) => {

    return (

        <PageTransition>

            <section className="dashboard-page">


                <div className="dashboard-page-header">

                    <DashboardTopBar
                        title="Dashboard"
                        setSidebarOpen={setSidebarOpen}
                        onOpenProfile={onOpenProfile}
                    />

                    <DashboardHeader />

                </div>

                <div className="dashboard-page-content">

                    <DashboardStats />

                    <div className="dashboard-charts-row">

                        <DashboardAdmissionsChart />

                        <DashboardDepartmentChart />

                    </div>

                    <div className="dashboard-bottom-row">

                        <DashboardAlerts />

                        <DashboardAppointmentChart />

                    </div>

                </div>

            </section>

        </PageTransition>

    );

};

export default Dashboard;
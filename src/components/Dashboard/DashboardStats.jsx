import { dashboardStats } from "./dashboardData";

import DashboardStatCard from "./DashboardStatCard";

import "./DashboardStats.css";

const DashboardStats = () => {

    return (

        <section className="dashboard-stats">

            {dashboardStats.map((stat, index) => (

                <DashboardStatCard
                    key={stat.id}
                    stat={stat}
                    index={index}
                />

            ))}

        </section>

    );

};

export default DashboardStats;
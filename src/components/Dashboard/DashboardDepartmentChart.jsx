import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

import { departmentDistribution } from "./dashboardData";
import { useState } from "react";

import "./DashboardDepartmentChart.css";

const COLORS = [
    "#065F46", // Emerald 800
    "#047857", // Emerald 700
    "#059669", // Emerald 600
    "#10B981", // Emerald 500
    "#34D399", // Emerald 400
    "#6EE7B7", // Emerald 300
    "#A7F3D0", // Emerald 200
    "#D1FAE5", // Emerald 100
];

const DashboardDepartmentChart = () => {

    const totalPatients = departmentDistribution.reduce(
        (total, item) => total + item.patients,
        0
    );

    const [activeDepartment, setActiveDepartment] = useState(null);

    return (

        <section className="dashboard-department-chart">

            <div className="dashboard-department-header">

                <div>

                    <h3>Department Distribution</h3>

                    <p>Current Patients</p>

                </div>

            </div>

            <div className="dashboard-department-content">

                <div className="dashboard-department-body">

                    <ResponsiveContainer
                        width="100%"
                        height={330}
                    >

                        <PieChart>

                            <Pie
                                data={departmentDistribution}
                                dataKey="patients"
                                innerRadius={88}
                                outerRadius={122}
                                paddingAngle={4}
                                stroke="#ffffff"
                                strokeWidth={3}
                                onMouseEnter={(_, index) => setActiveDepartment(index)}
                                onMouseLeave={() => setActiveDepartment(null)}
                            >
                                {departmentDistribution.map((entry, index) => (
                                    <Cell
                                        key={entry.department}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            

                        </PieChart>

                    </ResponsiveContainer>

                    <div className="dashboard-department-center">

                        {activeDepartment === null ? (

                            <>

                                <h2>{totalPatients}</h2>

                                <span>Patients</span>

                            </>

                        ) : (

                            <>

                                <h4
                                    style={{
                                        color: COLORS[activeDepartment],
                                    }}
                                >
                                    {departmentDistribution[activeDepartment].department}
                                </h4>

                                <h2>
                                    {departmentDistribution[activeDepartment].patients}
                                </h2>

                                <span>Patients</span>

                            </>

                        )}

                    </div>

                </div>


            </div>

        </section>

    );

};

export default DashboardDepartmentChart;
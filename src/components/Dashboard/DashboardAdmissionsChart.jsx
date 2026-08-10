import {
    AreaChart,
    Area,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import { patientAdmissions } from "./dashboardData";

import DashboardTooltip from "./DashboardTooltip";

import "./DashboardAdmissionsChart.css";

const DashboardAdmissionsChart = () => {

    return (

        <section className="dashboard-admissions-chart">

            <div className="dashboard-chart-header">

                <div>

                    <h3>

                        Patient Admissions

                    </h3>

                    <p>

                        Last 7 Days

                    </p>

                </div>

            </div>

            <div className="dashboard-chart-body">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <AreaChart
                        data={patientAdmissions}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -20,
                            bottom: 0,
                        }}
                    >

                        <defs>

                            <linearGradient
                                id="admissionGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >

                                <stop
                                    offset="5%"
                                    stopColor="var(--primary)"
                                    stopOpacity={0.35}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="var(--primary)"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="var(--border)"
                        />

                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip
                            content={
                                <DashboardTooltip
                                    valueLabel="Patients"
                                />
                            }
                        />

                        <Area
                            type="natural"
                            dataKey="patients"
                            stroke="var(--primary)"
                            strokeWidth={3}
                            fill="url(#admissionGradient)"
                            dot={{
                                r: 4,
                                fill: "var(--primary)",
                                strokeWidth: 2,
                                stroke: "#ffffff",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

};

export default DashboardAdmissionsChart;
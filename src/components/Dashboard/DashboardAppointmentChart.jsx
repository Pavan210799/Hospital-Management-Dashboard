import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import { appointmentTrend } from "./dashboardData";

import DashboardTooltip from "./DashboardTooltip";

import "./DashboardAppointmentChart.css";

const DashboardAppointmentChart = () => {

    return (

        <section className="dashboard-appointment-chart">

            <div className="dashboard-appointment-chart-header">

                <div>

                    <h3>

                        Appointments

                    </h3>

                    <p>

                        This Week

                    </p>

                </div>

            </div>

            <div className="dashboard-appointment-chart-body">

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <BarChart
                        data={appointmentTrend}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -15,
                            bottom: 0,
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="var(--border)"
                        />

                        <XAxis
                            dataKey="day"
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
                                    valueLabel="Appointments"
                                />
                            }
                        />

                        <Bar
                            dataKey="appointments"
                            radius={[10,10,0,0]}
                            fill="var(--primary)"
                            maxBarSize={42}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

};

export default DashboardAppointmentChart;
import { motion } from "framer-motion";
import { FaTriangleExclamation } from "react-icons/fa6";

import "./DashboardStatCard.css";

const DashboardStatCard = ({ stat, index }) => {

    const Icon = stat.icon;

    const formattedValue =
        stat.title === "Today's Revenue"
            ? `₹${stat.value.toLocaleString("en-IN")}`
            : stat.value.toLocaleString("en-IN");

    return (

        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
                delay: index * 0.08,
            }}
        >

            <motion.div
                className={`dashboard-stat-card ${
                    stat.variant === "danger"
                        ? "dashboard-stat-card-danger"
                        : ""
                }`}
                whileHover={{
                    y: -6,
                    scale: 1.03,
                }}
                transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 15,
                    mass: 0.4,
                }}
            >

                <div className="dashboard-stat-card-top">

                    <div className="dashboard-stat-card-icon">

                        <Icon />

                    </div>

                    <div className="dashboard-stat-card-content">

                        <h2>

                            {formattedValue}

                        </h2>

                        <p>

                            {stat.title}

                        </p>

                    </div>

                </div>

                <div className="dashboard-stat-card-growth">

                    {stat.variant === "danger"
                        ? (
                            <>
                                <FaTriangleExclamation />

                                <span>

                                    {stat.growth}

                                </span>

                            </>
                        )
                        : (
                            <>
                                <span>

                                    ↗ {stat.growth}% from last month

                                </span>

                            </>
                        )}

                </div>

            </motion.div>

        </motion.div>

    );

};

export default DashboardStatCard;
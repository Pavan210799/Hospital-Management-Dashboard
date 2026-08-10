import {
    FaTriangleExclamation,
    FaCircleCheck,
    FaScrewdriverWrench,
} from "react-icons/fa6";

import { importantAlerts } from "./dashboardData";

import "./DashboardAlerts.css";

const DashboardAlerts = () => {

    const getAlertIcon = (type) => {

        switch (type) {

            case "danger":
                return <FaTriangleExclamation />;

            case "warning":
                return <FaScrewdriverWrench />;

            default:
                return <FaCircleCheck />;

        }

    };

    return (

        <section className="hospital-alerts-card">

            <div className="hospital-alerts-card-header">

                <h3>

                    Critical Alerts

                </h3>

                <p>

                    Hospital Notifications

                </p>

            </div>

            <div className="hospital-alerts-list">

                {importantAlerts.map((alert) => (

                    <div
                        key={alert.id}
                        className={`hospital-alert-item hospital-alert-${alert.type}`}
                    >

                        <div className="hospital-alert-item-icon">

                            {getAlertIcon(alert.type)}

                        </div>

                        <div className="hospital-alert-item-content">

                            <h4>

                                {alert.title}

                            </h4>

                            <span>

                                {alert.time}

                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default DashboardAlerts;
import "./DashboardTooltip.css";

const DashboardTooltip = ({
    active,
    payload,
    label,
    valueLabel,
}) => {

    if (!active || !payload || !payload.length) {

        return null;
    }

    return (

        <div className="dashboard-tooltip">

            <p className="dashboard-tooltip-label">

                {label}

            </p>

            <h4 className="dashboard-tooltip-value">

                {payload[0].value}

                <span>

                    {" "}{valueLabel}

                </span>

            </h4>

        </div>

    );

};

export default DashboardTooltip;
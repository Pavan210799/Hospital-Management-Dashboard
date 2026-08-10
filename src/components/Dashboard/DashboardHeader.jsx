import { useEffect, useState } from "react";

import "./DashboardHeader.css";

const DashboardHeader = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const greeting = () => {

        const hour = currentTime.getHours();

        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    };

    const time = currentTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const day = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
    });

    const date = currentTime.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (

        <section className="dashboard-header">

            <div className="dashboard-header-content">

                <h1 className="dashboard-header-title">

                    {greeting()}

                </h1>

                <p className="dashboard-header-subtitle">

                    Here's what's happening at Medicare Hospital today.

                </p>

            </div>

            <div className="dashboard-header-clock">

                <h2>{time}</h2>

                <span>{day}</span>

                <small>{date}</small>

            </div>

        </section>

    );

};

export default DashboardHeader;
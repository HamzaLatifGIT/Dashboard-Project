import React from "react";

// Pages :
import DashboardHome from "./Screens/Home/Index";

// Icons :
import { MdDashboard } from "react-icons/md";





let Routes = [
    { label: "Dashboard", path: "/", icon: MdDashboard, element: DashboardHome }
];


export default Routes;
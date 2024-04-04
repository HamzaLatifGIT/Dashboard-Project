import React from "react";

// Pages :
import DashboardHome from "./Screens/Home/Index";
import Customers from "./Screens/Customers/Index";
import Sellers from "./Screens/Sellers/Index";
import AddSellers from "./Screens/Sellers/AddSellerForm";
import AddBuyerForm from "./Screens/Customers/AddBuyerForm";
import Products from "./Screens/Products/Index";
import AddProductForm from "./Screens/Products/AddProductForm";

// Icons :
import { MdDashboard } from "react-icons/md";
import { FaHospitalUser, FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";







let Routes = [
    { label: "Dashboard", path: "/", icon: MdDashboard, element: DashboardHome },
    { label: "Sellers", path: "sellers", icon: FaHospitalUser, element: Sellers },
    { label: "Add/Edit Sellers", path: "sellers/add", icon: FaHospitalUser, element: AddSellers, hide: true },
    { label: "Customers", path: "customers", icon: FaCircleDollarToSlot, element: Customers },
    { label: "Add/Edit Buyers", path: "customers/add", icon: FaHospitalUser, element: AddBuyerForm, hide: true },
    { label: "Products", path: "products", icon: MdOutlineProductionQuantityLimits, element: Products },
    { label: "Add/Edit Product", path: "products/add", icon: MdOutlineProductionQuantityLimits, element: AddProductForm, hide: true },


];


export default Routes;
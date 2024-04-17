import React from "react";

// Pages :
import DashboardHome from "./Screens/Home/Index";
// Sellers :
import Sellers from "./Screens/Sellers/Index";
import AddSellers from "./Screens/Sellers/AddSellerForm";
import ViewSellers from "./Screens/Sellers/ViewSeller";
// Customers :
import Customers from "./Screens/Customers/Index";
import AddBuyerForm from "./Screens/Customers/AddBuyerForm";
// products :
import Products from "./Screens/Products/Index";
import AddProductForm from "./Screens/Products/AddProductForm";
import ViewBuyer from "./Screens/Customers/ViewBuyer";

// Icons :
import { MdDashboard } from "react-icons/md";
import { FaHospitalUser, FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";







let Routes = [
    { label: "Dashboard", path: "/", icon: MdDashboard, element: DashboardHome },
    { label: "Sellers", path: "sellers", icon: FaHospitalUser, element: Sellers },
    { label: "Add/Edit Sellers", path: "sellers/add", icon: FaHospitalUser, element: AddSellers, hide: true },
    { label: "View Seller", path: "sellers/view", icon: FaHospitalUser, element: ViewSellers, hide: true },
    { label: "Customers", path: "customers", icon: FaCircleDollarToSlot, element: Customers },
    { label: "Add/Edit Buyers", path: "customers/add", icon: FaHospitalUser, element: AddBuyerForm, hide: true },
    { label: "View Buyer", path: "customers/view", icon: FaHospitalUser, element: ViewBuyer, hide: true },
    { label: "Products", path: "products", icon: MdOutlineProductionQuantityLimits, element: Products },
    { label: "Add/Edit Product", path: "products/add", icon: MdOutlineProductionQuantityLimits, element: AddProductForm, hide: true },


];


export default Routes;
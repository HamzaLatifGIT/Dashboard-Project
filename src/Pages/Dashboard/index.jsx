import React from 'react';
import { Route, Routes } from 'react-router-dom';

// MUI :
import { Box, Divider } from '@mui/material';

// Components :
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';

// Routes :
import DashboardRoutes from './Routes';





const Dashboard = () => {
    return (
        <>
            <Box sx={{ display: "flex", overflow: "hidden" }}>
                <SideBar Routes={DashboardRoutes} />
                <Box sx={{ width: "100%" }}>
                    <NavBar />
                    <Divider />
                    <Routes>
                        {
                            DashboardRoutes.map((route, index) => <Route key={index} path={route.path} element={<route.element />} />)
                        }
                    </Routes>
                </Box>
            </Box>
        </>
    )
}

export default Dashboard
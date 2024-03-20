import React from 'react';
import { Route, Routes } from 'react-router-dom';

// MUI :
import { Box } from '@mui/material';

// Components :
import SideBar from './Components/SideBar';

// Routes :
import DashboardRoutes from './Routes';





const Dashboard = () => {
    return (
        <>
            <Box sx={{ display: "flex", gap: "1rem" , overflow:"hidden" }}>
                <SideBar Routes={DashboardRoutes} />
                <Routes>
                    {
                        DashboardRoutes.map((route, index) => <Route key={index} path={route.path} element={<route.element />} />)
                    }
                </Routes>
            </Box>
        </>
    )
}

export default Dashboard
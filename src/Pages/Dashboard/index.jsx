import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// MUI :
import { Box, Divider } from '@mui/material';

// Components :
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';

// Helpers :
import useWindowResize from 'Utils/WindowResize';

// Routes :
import DashboardRoutes from './Routes';





const Dashboard = () => {
    const windowWidth = useWindowResize();

    const [isOpenDrawar, setIsOpenDrawar] = useState(true)

    const toggleDrawer = () => {
        setIsOpenDrawar(!isOpenDrawar);
    };

    React.useEffect(() => {
        if (windowWidth <= 1025) setIsOpenDrawar(false);
        else setIsOpenDrawar(true);
    }, [windowWidth]);
    return (
        <>
            <Box sx={{ display: "flex", overflow: "hidden" }}>
                <SideBar Routes={DashboardRoutes} open={isOpenDrawar} />
                <Box sx={{ width: "100%" }}>
                    <NavBar toggleDrawer={toggleDrawer} />
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
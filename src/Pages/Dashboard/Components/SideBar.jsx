import React from 'react';

// MUI :
import { Divider, Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, IconButton, Box, Button } from '@mui/material';

// ICONS :
import Logo from "Assets/logo.png"


let drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    height: "80px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        "& .MuiPaper-root": {
            color: theme.palette.primary.text,
            backgroundColor: theme.palette.primary.field,
        },
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
const SideBar = ({ Routes, open = true }) => {
    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box component={"img"} src={Logo} sx={{ width: "50px", objectFit: "cover" }} />
                </DrawerHeader>
                <Divider />
                <List>
                    {Routes.map((route, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block', ".MuiListItemButton-root": { "&:hover": { backgroundColor: "secondary.field", color: "primary.main" } } }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "inherit",
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <route.icon />
                                </ListItemIcon>
                                <ListItemText primary={route?.label} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default SideBar
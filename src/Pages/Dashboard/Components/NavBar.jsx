import React from 'react'

// MUI :
import { Box, Button, IconButton, Typography, MenuItem, Avatar, Divider, Menu } from '@mui/material'

// ICONS :
import { LuMenu } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import GenrateImage from 'Utils/GenrateImage';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';







const NavBar = ({ toggleDrawer }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0rem 1rem", width: "100%", minHeight: "80px", height: "80x" }}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <IconButton sx={{ fontSize: "2rem", height: "fit-content", minWidth: "45px", boxSizing: "border-box" }} onClick={toggleDrawer}> <LuMenu /> </IconButton>
                    <Typography sx={{ fontSize: ".8rem", fontWeight: "600", color: "primary.grey", marginTop: ".3rem" }}> <p style={{ letterSpacing: "5px", lineHeight: ".7rem" }}> Welcome </p> <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }}> Jhone Doe </p> </Typography>
                </Box>

                <Box  >
                    <IconButton sx={{ padding: "0", height: "40px", width: "40px", overflow: "hidden", backgroundColor: "#0000000a" }} onClick={handleClick}
                        size="small"
                        

                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}> <Box component={"img"} sx={{ width: "80%", height: "80%" }} src={GenrateImage({}, "profile")} alt="" /> <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}

                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >

                            <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu> </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default NavBar
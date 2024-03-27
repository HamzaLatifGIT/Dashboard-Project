import React from 'react'

// MUI :
import { Box, Button, IconButton, Typography } from '@mui/material'

// ICONS :
import { LuMenu } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import GenrateImage from 'Utils/GenrateImage';






const NavBar = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0rem 1rem", width: "100%", minHeight: "80px", height: "80x" }}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <IconButton sx={{ fontSize: "2rem", height: "fit-content", minWidth: "45px", boxSizing: "border-box" }}> <LuMenu /> </IconButton>
                    <Typography sx={{ fontSize: ".8rem", fontWeight: "600", color: "primary.grey", marginTop: ".3rem" }}> <p style={{ letterSpacing: "5px", lineHeight: ".7rem" }}> Welcome </p> <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }}> Jhone Doe </p> </Typography>
                </Box>
                <Box>
                    <IconButton sx={{ padding: "0", height: "40px", width: "40px", overflow: "hidden", backgroundColor: "#0000000a" }} > <Box component={"img"} sx={{ width: "80%", height: "80%" }} src={GenrateImage({}, "profile")} alt="" /> </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default NavBar
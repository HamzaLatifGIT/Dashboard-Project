import React from 'react'

// MUI :
import { Box, Typography } from '@mui/material'

// ICONS :
import { FaTasks } from "react-icons/fa";





const Cards = ({ title, value, icon }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem", padding: "1rem", maxWidth: "400px", minWidth: "200px", border: "1px solid", borderColor: "primary.main", backgroundColor: "secondary.field", borderRadius: ".5rem", width: "-webkit-fill-available", boxShadow: (theme) => `0px 0px 5px ${theme.palette.primary.shadow}`, }}>
                <Box sx={{ display: "flex", gap: ".5rem", alignItems: "center", fontSize: "1.1rem", fontWeight: "600", color: "primary.field" }}> {icon ?? <FaTasks />} <Typography sx={{ fontSize: "inherit", fontWeight: "inherit" }}> {title ?? "Total profit"} </Typography> </Box>
                <Typography sx={{ fontWeight: "500" , marginLeft:"1.7rem" }}> $ {value ?? "400"} </Typography>
            </Box>
        </>
    )
}

export default Cards
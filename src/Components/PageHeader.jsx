import React from 'react'
import { useLocation } from 'react-router-dom'

// MUI :
import { Box, Typography } from '@mui/material'

// ICONS :
import { FaAngleRight } from "react-icons/fa6";




const PageHeader = () => {
    let Location = useLocation()
    let Routes = Location.pathname.slice(1).split("/")
    // console.log(Location);
    return (
        <>
            <Box sx={{ display: "flex", gap: ".7rem", alignItems: "center", fontSize: "1.5rem", fontWeight: "500", color: "secondary.text" }}>
                {
                    Routes.map((value, index) => {
                        return (
                            <>
                                {index != 0 && <Typography sx={{ fontSize: "inherit", fontWeight: "inherit", color: "inherit", display: "flex" }}> <FaAngleRight /> </Typography>}
                                <Typography sx={{ fontSize: "inherit", fontWeight: "inherit", color: "inherit" }}> {value[0]?.toLocaleUpperCase() + value?.slice(1)} </Typography>
                            </>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default PageHeader
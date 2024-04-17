import React from 'react';

// MUI :
import { Box, CircularProgress } from "@mui/material"





const LoadingWrapper = () => {
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress sx={{ color: "primary.field", fontSize: "10px" }} size={"1.7rem"} />
            </Box>
        </>
    )
}

export default LoadingWrapper
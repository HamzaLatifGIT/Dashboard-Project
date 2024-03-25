import React from "react";

// MUI :
import { createTheme } from "@mui/material";




const MainTheme = createTheme({
    palette: {
        primary: {
            main: "#5D87FF",
            field: "#405189",
            text: "#fff",
            grey: "#575757"
        },
        secondary: {
            main: "#49BEFF",
            field: "#5d87ff1a",
            // field: "#ebf3fe",
            text: "#5a6a85"
        },
    }
})

export default MainTheme
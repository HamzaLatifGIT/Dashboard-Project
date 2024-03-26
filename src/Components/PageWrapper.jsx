import React from 'react'

// MUI :
import { Box } from '@mui/material'
import PageHeader from './PageHeader'




const PageWrapper = ({ sx, children }) => {
    return (
        <>
            <Box sx={{ padding: "1rem" , display:"flex" , gap:"1rem" , flexDirection:"column" , ...sx }}>
                <PageHeader/>
                {children}
            </Box>
        </>
    )
}

export default PageWrapper
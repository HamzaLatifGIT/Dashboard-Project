import React from 'react'

// MUI :
import { Box } from '@mui/material'
import PageHeader from './PageHeader'
import LoadingWrapper from './LoadingWrapper'




const PageWrapper = ({ sx, loading, children }) => {
    return (
        <>
            <Box sx={{ padding: "1rem", display: "flex", gap: "2rem", flexDirection: "column", ...sx }}>
                <PageHeader />

                {
                    loading ?
                        <LoadingWrapper />
                        :
                        children
                }
            </Box>
        </>
    )
}

export default PageWrapper
import React from 'react'

// MUI :
import { Box, Typography } from '@mui/material'

// Components :
import PageWrapper from 'Components/PageWrapper'
import Cards from './Components/Cards'
import Chart from './Components/Chart'




let CardsData = [
    { title: "Total Profit", value: "400" },
    { title: "Total Sales", value: "1400" },
    { title: "Total Purchases", value: "1100" },
]
const Home = () => {
    return (
        <>
            <PageWrapper>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    {CardsData.map((data, index) => <Cards key={index} title={data.title} value={data.value} />)}
                </Box>
                <Box sx={{ height: "400px" , display:"flex" , flexDirection:"column", gap:".5rem" }}>
                    <Typography type='heading'> Sales Report </Typography>
                    <Chart />
                </Box>
            </PageWrapper>
        </>
    )
}

export default Home
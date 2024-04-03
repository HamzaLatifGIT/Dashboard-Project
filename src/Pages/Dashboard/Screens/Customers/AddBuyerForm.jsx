import React from 'react'

// MUI :
import { Box, Button, Grid } from '@mui/material'

// Components :
import InputField from 'Components/InputField'
import PageWrapper from 'Components/PageWrapper'






const AddBuyerForm = () => {

    const handleSubmit = () => {

    }
    return (
        <>
            <PageWrapper>
                <Grid container spacing={2} component="form" onSubmit={handleSubmit} sx={{ maxWidth: { md: "80%" }, mx: "auto" }}>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"firstName"} label={"First Name"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"lastName"} label={"Last Name"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"email"} label={"Email"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"number"} label={"Number"} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <InputField name={"address"} label={"Address"} />
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ display: "fex", justifyContent: "center" }} >
                        <Button sx={{ backgroundColor: "primary.field", maxWidth: "300px", minWidth: "200px", mx: "auto" }} color='primary' variant="contained" fullWidth type='submit' >Save</Button>
                    </Grid>
                </Grid>
            </PageWrapper>
        </>
    )
}

export default AddBuyerForm
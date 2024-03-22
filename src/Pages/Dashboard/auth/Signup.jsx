import React from 'react'
import { Link } from "react-router-dom"
import { Grid, Paper, TextField, Typography, FormControlLabel, Checkbox, Button } from "@mui/material"


function Signup() {
    const logincard = {
        padding: 20, height: '70vh', width: 550, margin: "20px auto"
    }
    const marginBottom = {
        marginBottom: 20
    }
    const btnstyle = {
        margin: '8px 0'
    }
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            // align='center'
            sx={{ minHeight: '100vh' }}>
            <Paper elevation={1} style={logincard}>
                <Grid sx={{ marginBottom: 3 }}><Typography variant='h3' textAlign={'center'}>Sign up</Typography ></Grid>

                <TextField label="Email" variant="outlined" fullWidth margin="dense" style={marginBottom} />
                <TextField label="Password" variant="outlined" fullWidth style={marginBottom} />
                <TextField label="Confirm Password" variant="outlined" fullWidth style={marginBottom} />


                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            align="none"
                        />
                    }
                    label="Agree the terms and policy"
                /><br />
                <Button color='primary' variant="contained" fullWidth style={btnstyle}>Sign up</Button>
               <Grid align='center'><Typography>or</Typography> <Typography >
                    <Link to={'/login'} >
                       Login
                    </Link>
                </Typography></Grid> 
               
                

            </Paper>
        </Grid>
    )
}

export default Signup
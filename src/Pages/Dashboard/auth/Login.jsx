import React from 'react'
import { Link } from "react-router-dom"
import { Grid, Paper, TextField, Typography, FormControlLabel, Checkbox, Button } from "@mui/material"


function Login() {
    const logincard = {
        padding: 20, height: '70vh', width: 550, margin: "20px auto"
    }
    const marginBottom = {
        marginBottom: 30
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
                <Grid sx={{ marginBottom: 5 }}><Typography variant='h3' textAlign={'center'}>Sign In</Typography ></Grid>

                <TextField label="Email" variant="outlined" fullWidth margin="dense" style={marginBottom} />
                <TextField label="Password" variant="outlined" fullWidth style={marginBottom} />


                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            align="none"
                        />
                    }
                    label="Remember me"
                /><br />
                <Button color='primary' variant="contained" fullWidth style={btnstyle}>Login</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link to="/signup" >
                        Sign Up
                    </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login
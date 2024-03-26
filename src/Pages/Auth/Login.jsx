import { React, useState } from 'react';
import { Link } from "react-router-dom"

// MUI :
import { Grid, Paper, TextField, Typography, FormControlLabel, Checkbox, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material"

// ICONS :
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    


    const [emails, setEmail] = useState('')
    const [passwords, setPassword] = useState('')



    const logincard = {
        padding: 20, height: '70vh', width: 550, margin: "20px auto"
    }
    const marginBottom = {
        marginBottom: 30
    }
    const btnstyle = {
        margin: '8px 0'
    }

    const LoginHnadler = (e) => {
        e.preventDefault();
        console.warn(emails, passwords)
    }
    return (
        <form onSubmit={LoginHnadler}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                // align='center'
                sx={{ minHeight: '100vh' }}>
                <Paper elevation={1} style={logincard}>
                    <Grid sx={{ marginBottom: 5 }}><Typography variant='h3' textAlign={'center'}>Sign In</Typography ></Grid>

                    <TextField InputLabelProps={{ shrink: true }} label="Email" variant="outlined" fullWidth margin="dense" style={marginBottom} onChange={(e) => { setEmail(e.target.value) }} value={emails} type='email' />
                    {/* <TextField label="Password"  variant="outlined" fullWidth style={marginBottom} onChange={(e) => { setPassword(e.target.value) }} value={passwords} type='password'/> */}
                    <FormControl variant="outlined" fullWidth onChange={(e) => { setPassword(e.target.value) }} value={passwords} style={marginBottom}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <br />
                    <Button color='primary' variant="contained" fullWidth style={btnstyle} type='submit' >Login</Button>
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
            </Grid></form>
    )
}

export default Login
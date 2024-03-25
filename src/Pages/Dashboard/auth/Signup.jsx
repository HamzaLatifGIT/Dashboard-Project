import { React, useState } from 'react'
import { Link } from "react-router-dom"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Paper, TextField, Typography, FormControlLabel, FormControl, Checkbox, Button, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material"


function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);


    const [emails, setEmail] = useState('')
    const [passwords, setPassword] = useState('')
    const [confirmPasswords, setConfirmPassword] = useState('')


    const SignupHnadler = (e) => {
        e.preventDefault();
        console.warn(emails, passwords, confirmPasswords)
    }

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
        <form onSubmit={SignupHnadler} autoComplete='off'>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}>
                <Paper elevation={1} style={logincard}>
                    <Grid sx={{ marginBottom: 3 }}><Typography variant='h3' textAlign={'center'}>Sign up</Typography ></Grid>

                    <TextField label="Email" variant="outlined" fullWidth margin="dense" style={marginBottom} onChange={(e) => { setEmail(e.target.value) }} value={emails} />
                  
                    <FormControl variant="outlined" fullWidth onChange={(e) => { setPassword(e.target.value) }} value={passwords} style={marginBottom}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput inputProps={{
                            autoComplete: 'new-password',
                            form: {
                                autoComplete: 'off',
                            },
                        }}
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
                    <FormControl variant="outlined" fullWidth onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPasswords} style={marginBottom}>
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                autoComplete: 'new-password',
                                form: {
                                    autoComplete: 'off',
                                },
                            }}
                            id="outlined-adornment-confirmpassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}

                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>

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
                    <Button color='primary' variant="contained" fullWidth style={btnstyle} type='submit'>Sign up</Button>
                    <Grid align='center'><Typography>or</Typography> <Typography >
                        <Link to={'/login'} >
                            Login
                        </Link>
                    </Typography></Grid>



                </Paper>
            </Grid>
        </form>
    )
}

export default Signup
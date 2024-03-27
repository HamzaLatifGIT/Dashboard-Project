import { React, useState } from 'react'
import { Link } from "react-router-dom"

// MUI :
import { Grid, Paper, Typography, FormControlLabel, FormControl, Checkbox, Button, OutlinedInput, InputAdornment, IconButton } from "@mui/material"

// ICONS :
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





function Signup() {



    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const [emails, setEmail] = useState('')
    const [passwords, setPassword] = useState('')
    const [confirmPasswords, setConfirmPassword] = useState('')


    const SignupHnadler = (e) => {
        e.preventDefault();
        console.warn(emails, passwords, confirmPasswords)
    }

    const logincard = {
        padding: 20, height: '72vh', width: 400, margin: "20px auto"
    }
    const marginBottom = {
        marginBottom: 10
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

                    <FormControl fullWidth size='small'>
                        <Typography sx={{ my: 0.8 }}>Name</Typography>
                        <OutlinedInput />
                    </FormControl>
                    <FormControl sx={{ my: 1 }} size='small' variant="outlined" fullWidth onChange={(e) => { setPassword(e.target.value) }} value={passwords} >
                        <Typography sx={{ my: 0.8 }}>Email Address</Typography>
                        <OutlinedInput />
                    </FormControl>
                    <FormControl size='small' variant="outlined" fullWidth onChange={(e) => { setPassword(e.target.value) }} value={confirmPasswords} style={marginBottom}>
                        <Typography sx={{ my: 0.8 }}>Password</Typography>
                        <OutlinedInput
                            inputProps={{
                                autoComplete: 'new-password',
                                form: {
                                    autoComplete: 'off',
                                },
                            }}
                            id="outlined-adornment-confirmpassword"
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
                    <Button sx={{ backgroundColor: "primary.field" }} color='primary' variant="contained" fullWidth style={btnstyle} type='submit'>Sign up</Button>
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
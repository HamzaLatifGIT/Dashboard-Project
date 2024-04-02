import { React, useState } from 'react'
import { Link } from "react-router-dom"

// MUI :
import { Grid, Paper, Typography, FormControlLabel, FormControl, Checkbox, Button, OutlinedInput, InputAdornment, IconButton } from "@mui/material"

// Components :
import InputField from "Components/InputField"

// ICONS :
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





function Signup() {

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const enteringFormData = (event) => {
        let { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const SignupHnadler = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={SignupHnadler} autoComplete='off'>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh'}}>
                <Paper elevation={1} sx={{ height: '72vh', width: 400, margin: "20px auto" }}>
                    <Grid sx={{ marginBottom: 3 }}><Typography variant='h3' textAlign={'center'}>Sign up</Typography ></Grid>
                    <InputField name={"firstName"} label={"First Name"} value={formData.firstName} hadleChange={enteringFormData} />
                    <InputField name={"lastName"} label={"Last Name"} value={formData.lastName} hadleChange={enteringFormData} />
                    <InputField name={"email"} label={"Email"} value={formData.email} hadleChange={enteringFormData} />
                    <FormControl size='small' variant="outlined" fullWidth sx={{ marginBottom: 10 }}>
                        <Typography sx={{ my: 0.8 }}>Password</Typography>
                        <OutlinedInput
                            inputProps={{
                                autoComplete: 'new-password',
                                form: {
                                    autoComplete: 'off',
                                },
                            }}
                            name='password'
                            onChange={enteringFormData}
                            value={formData.password}
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
                    <Button sx={{ backgroundColor: "primary.field", margin: '8px 0' }} color='primary' variant="contained" fullWidth type='submit'>Sign up</Button>
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
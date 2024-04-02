import { React, useState } from 'react';
import { Link } from "react-router-dom"

// MUI :
import { Grid, Paper, Typography, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box } from "@mui/material"

// ICONS :
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// API :
import { LoginAPI } from 'API/Auth';

// Helper :
import { toast } from 'react-toastify';
import LoadingButton from 'Components/LoadingButton';
import InputField from 'Components/InputField';





function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setloading] = useState(false)


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleChange = (event) => {
        let { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const LoginHnadler = async (e) => {
        e.preventDefault();
        setloading(true)
        let res = await LoginAPI(formData)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res.data.message)
        }

        setloading(false)
    }

    return (
        <form onSubmit={LoginHnadler}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                // align='center'
                sx={{ minHeight: '100vh', backgroundColor: "secondary.field" }} >
                <Paper elevation={1} sx={{ padding: 5, height: '70vh', width: 400, margin: "20px auto", borderRadius: "8px", boxShadow: (theme) => `0px 0px 15px ${theme.palette.primary.shadow}` }}>
                    <Grid sx={{ marginBottom: 5 }}><Typography variant='h3' textAlign={'center'}>Sign In</Typography ></Grid>
                    <Box sx={{ marginBottom: 1 }} >
                        {/* <Typography sx={{ my: 0.8 }}>Username</Typography> */}
                        {/* <FormControl fullWidth >
                            <OutlinedInput size='small' value={formData.email} onChange={handleChange} name='email' />
                        </FormControl> */}
                        <InputField name={"email"} label={"Email"} value={formData.email} handleChange={handleChange} />
                    </Box>
                    <Box>
                        <Typography sx={{ my: 0.8 }}>Password</Typography>
                        <FormControl variant="outlined" fullWidth  >
                            <InputLabel />
                            <OutlinedInput
                                size='small'
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                name='password'
                                onChange={handleChange}
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
                    </Box>
                    <br />
                    <LoadingButton label={"LogIn"} loading={loading} type="submit" />
                    {/* <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography> */}
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
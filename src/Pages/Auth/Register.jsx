import { React, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

// MUI :
import { Grid, Paper, Typography, FormControlLabel, FormControl, Checkbox, Button, OutlinedInput, InputAdornment, IconButton } from "@mui/material"

// Components :
import InputField from "Components/InputField"
import PasswordField from 'Components/PasswordField'
import LoadingButton from 'Components/LoadingButton'

// APIs:
import { RegisterAPI } from "API/Auth"
// Helper :
import { toast } from 'react-toastify'




function Signup() {
    let Navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    })
    const [loading, setLoading] = useState(false)

    const enteringFormData = (event) => {
        let { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const SignupHnadler = async (e) => {
        e.preventDefault();
        setLoading(true)
        let res = await RegisterAPI(formData)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res.data?.message)
            Navigate("/login")
        }
        setLoading(false)
    }

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            component={"form"}
            onSubmit={SignupHnadler}
            // align='center'
            sx={{ minHeight: '100vh', backgroundColor: "secondary.field" }}>
            <Paper elevation={1} sx={{ padding: 5, display: 'flex', flexDirection: 'column', gap: 1, width: 400, margin: "20px auto", borderRadius: "8px", boxShadow: (theme) => `0px 0px 15px ${theme.palette.primary.shadow}` }}>
                <Grid sx={{ marginBottom: 3 }}><Typography variant='h3' textAlign={'center'}>Sign up</Typography ></Grid>
                <InputField name={"firstName"} label={"First Name"} value={formData.firstName} onChange={enteringFormData} />
                <InputField name={"lastName"} label={"Last Name"} value={formData.lastName} onChange={enteringFormData} />
                <InputField name={"email"} label={"Email"} value={formData.email} onChange={enteringFormData} />
                <PasswordField name={"password"} value={formData.password} label={"Password"} onChange={enteringFormData} />
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
                {/* <Button sx={{ backgroundColor: "primary.field", margin: '8px 0' }} color='primary' variant="contained" fullWidth type='submit'>Sign up</Button> */}
                <LoadingButton loading={loading} label={"Sign Up"} type="submit" />
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
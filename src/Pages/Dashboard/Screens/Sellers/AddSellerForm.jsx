import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// MUI :
import { Box, Button, Grid } from '@mui/material'

// Components :
import InputField from 'Components/InputField'
import PageWrapper from 'Components/PageWrapper'
import LoadingButton from 'Components/LoadingButton'
import PasswordField from 'Components/PasswordField'
import UploadField from 'Components/UploadField'

// APIs :
import { CreateUserAPI, UpdateUserAPI } from 'API/User'
// Helper :
import { toast } from 'react-toastify'






const AddSellerForm = () => {
    let Navigate = useNavigate();
    let Location = useLocation()

    let UserData = Location.state?.UserData;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "seller",
        phoneNumber: "",
        address: ""
    })
    const [file, setFile] = useState(null)
    const [ImageURL, setImageURL] = useState(null)
    const [loading, setLoading] = useState(false)


    const enteringData = (event) => {
        let { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setLoading(true)

        let Payload = new FormData();

        Object.keys(formData).map(key => Payload.append(key, formData[key]))
        if (file) Payload.append("file", file)

        let res;
        if (UserData?._id) {
            res = await UpdateUserAPI(UserData?._id, Payload)
        } else {
            res = await CreateUserAPI(Payload)
        }
        if (res.error != null) {
            toast.error(res?.error);
        } else {
            toast.success(res.data?.message)
            Navigate(-1)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (Location.pathname?.includes("/edit")) {
            if (UserData) {
                setFormData({
                    firstName: UserData.firstName,
                    lastName: UserData.lastName,
                    email: UserData.email,
                    // password: UserData.firstName,
                    role: "seller",
                    phoneNumber: UserData.phoneNumber,
                    address: UserData.address
                })
                setImageURL(UserData?.profileImage)
            } else {
                Navigate(-1)
            }
        }
    }, [UserData])

    return (
        <>
            <PageWrapper>
                <Grid container spacing={2} component="form" onSubmit={handleSubmit} sx={{ maxWidth: { md: "80%" }, mx: "auto" }}>
                    <Grid item xs={12} sm={12}> <UploadField name={"avater"} value={ImageURL} onChange={(file) => setFile(file)} /> </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"firstName"} label={"First Name"} value={formData.firstName} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"lastName"} label={"Last Name"} value={formData.lastName} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"email"} label={"Email"} value={formData.email} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <PasswordField name={"password"} label={"Password"} value={formData.password} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"phoneNumber"} label={"Phone Number"} value={formData.phoneNumber} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"address"} label={"Address"} value={formData.address} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ display: "fex", justifyContent: "center" }} >
                        <LoadingButton label={UserData?._id ? "Edit" : "Save"} loading={loading} type="submit" />
                    </Grid>
                </Grid>
            </PageWrapper>
        </>
    )
}

export default AddSellerForm
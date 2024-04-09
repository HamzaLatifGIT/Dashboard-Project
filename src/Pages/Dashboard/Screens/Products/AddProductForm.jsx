import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// MUI :
import { Box, Button, Grid, Typography } from '@mui/material'

// Components :
import InputField from 'Components/InputField'
import PageWrapper from 'Components/PageWrapper'
import UploadField from 'Components/UploadField'
import LoadingButton from 'Components/LoadingButton'
import PasswordField from 'Components/PasswordField'
import SelectField from 'Components/SelectField'
import CustomeModal from "Components/Modal"

// APIs :
import { CreateProductAPI } from 'API/Product'
import { CreateCategoryAPI, GetCategoriesAPI } from 'API/Category'
// Helper :
import { toast } from 'react-toastify'





const AddBuyerForm = () => {

    let Navigate = useNavigate()

    const [allCategories, setAllCategories] = useState([])
    const [categoryData, setCategoryData] = useState({
        title: "",
        details: ""
    })
    const [formData, setFormData] = useState({
        title: "",
        details: "",
        price: "",
        category: "",
    })
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [categoryLoading, setCategoryLoading] = useState(false)


    const enteringData = (event) => {
        let { name, value } = event.target;
        console.log(name , value);

        setFormData({
            ...formData,
            [name]: value
        })
    }
    const enteringCategoryData = (event) => {
        let { name, value } = event.target;

        setCategoryData({
            ...categoryData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setLoading(true)

        let Payload = new FormData();

        Object.keys(formData).map(key => Payload.append(key, formData[key]))
        if (file) Payload.append("file", file)

        let res = await CreateProductAPI(Payload)
        if (res.error != null) {
            toast.error(res?.error);
        } else {
            toast.success(res.data?.message)
            Navigate(-1)
        }
        setLoading(false)
    }

    const AddCategory = async () => {
        setCategoryLoading(true)
        let res = await CreateCategoryAPI(categoryData)
        if (res.error != null) {
            toast.error(res.message)
        } else {
            toast.success(res.data?.message)
            setCategoryData({title:"" , details:""})
            gettingAllCategories()
        }
        setCategoryLoading(false)
    }
    const gettingAllCategories = async () => {
        let res = await GetCategoriesAPI()
        if (res.error != null) {
            toast.error(res.message)
        } else {
            setAllCategories(res.data?.result || [])
        }
    }
    useEffect(() => {
        gettingAllCategories()
    }, [])

    return (
        <>
            <PageWrapper>
                <Grid container spacing={2} component="form" onSubmit={handleSubmit} sx={{ maxWidth: { md: "80%" }, mx: "auto" }}>
                    <Grid item xs={12} sm={12}> <UploadField name={"avater"} onChange={(file) => setFile(file)} /> </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"title"} label={"Title"} value={formData.title} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"price"} label={"Price"} value={formData.price} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={"details"} label={"Details"} value={formData.details} onChange={enteringData} />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
                        <SelectField name={"category"} label="Category" value={formData.category} onChange={enteringData} options={allCategories} />
                        <Box sx={{ position: "absolute", right: "0", bottom: "-20px", "& p": { fontSize: ".8rem", color: "primary.field", cursor: "pointer" } }}> <CustomeModal name="Add Category" type='text' sx={{ maxWidth: { md: "800px" }, minWidth: { md: "500px" } }}  >
                            <Typography sx={{ mb: 3, textAlign: "center", fontSize: "1.1rem", fontWeight: "bold" }} cutomeType="heading" > Add New Category </Typography>
                            <Grid container spacing={2} sx={{ maxWidth: { md: "80%" }, mx: "auto" }}>
                                <Grid item xs={12} sm={12}>
                                    <InputField name={"title"} label={"Title"} value={categoryData.title} onChange={enteringCategoryData} />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <InputField name={"details"} label={"details"} value={categoryData.details} onChange={enteringCategoryData} />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <LoadingButton loading={categoryLoading} label={"Save"} onClick={AddCategory} />
                                </Grid>
                            </Grid>
                        </CustomeModal> </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ display: "fex", justifyContent: "center" }} >
                        <LoadingButton loading={loading} label={"Save"} type="submit" />
                    </Grid>
                </Grid>
            </PageWrapper>
        </>
    )
}

export default AddBuyerForm
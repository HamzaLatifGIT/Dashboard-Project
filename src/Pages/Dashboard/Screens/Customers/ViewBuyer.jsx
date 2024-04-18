import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// MUI :
import { Box, Button, Grid, Avatar, Typography } from '@mui/material'

// Components :
import InputField from 'Components/InputField'
import PageWrapper from 'Components/PageWrapper'
import LoadingButton from 'Components/LoadingButton'
import PasswordField from 'Components/PasswordField'
import UploadField from 'Components/UploadField'
import Table from 'Components/Table'
import CustomModal from 'Components/Modal'

// APIs :
import { CreateUserAPI, GetSpecifucUserAPI } from 'API/User'
// Helper :
import { toast } from 'react-toastify';
import GenrateImage from "Utils/GenrateImage"
import { createColumnHelper } from "@tanstack/react-table";
import SelectField from 'Components/SelectField'
import { GetProductsAPI, SellProductAPI } from 'API/Product'







const AddSellerForm = () => {
    let Navigate = useNavigate();
    let Location = useLocation();
    const columnHelper = createColumnHelper();
    let ID = new URLSearchParams(Location.search).get("i")

    const [userData, setUserData] = useState(null)
    const [allproducts, setAllProducts] = useState([])
    const [allSellproducts, setAllSellProducts] = useState([])
    const [selectedPage, setSelectedPage] = useState(1)

    const [formData, setFormData] = useState({
        product: "",
        price: "",
        quantity: "",
        note: "",
        user: ID
    })
    const [loading, setLoading] = useState(false)
    const [sellLoading, setSellLoading] = useState(false)


    const enteringData = (event) => {
        let { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const columns = [
        columnHelper.accessor("title", {
            header: "Title",
            cell: (info) => (

                <Box sx={{ display: "flex", flexFlow: "column" }}>
                    <Typography
                        fontSize={"14px"}
                        sx={{ fontWeight: "500", color: "secondary.text" }}
                    >
                        {info.row.original.title}
                    </Typography>
                </Box>
            ),
        }),
        columnHelper.accessor("category", {
            header: "Category",
            cell: (info) => (
                <Typography
                    fontSize={"14px"}
                    sx={{ fontWeight: "500", color: "secondary.text" }}
                >
                    {info.row.original.category?.title || info.row.original.category}
                </Typography>
            ),
        }),
        columnHelper.accessor("Price", {
            header: "Price",
            cell: (info) => (
                <Typography
                    fontSize={"14px"}
                    sx={{ fontWeight: "500", color: "secondary.text" }}
                >
                    {info.row.original?.Price || 0}
                </Typography>
            ),
        }),
        columnHelper.accessor("Quantity", {
            header: "Quantity",
            cell: (info) => {
                return (
                    <Box sx={{ display: "flex" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                fontSize={"14px"}
                                sx={{ fontWeight: "500", color: "secondary.text" }}
                            >
                                {info.row.original?.Quantity || 0}
                            </Typography>
                        </Box>
                    </Box>
                )
            },
        }),
        // columnHelper.accessor("quantity", {
        //   header: "Available Quantity",
        //   cell: (info) => (
        //     <Box sx={{ display: "flex", justifyContent: "center" }}>
        //       <Typography
        //         fontSize={"14px"}
        //         sx={{ fontWeight: "500", color: "secondary.text" }}
        //       >
        //         {info.row.original?.quantity || 0}
        //       </Typography>
        //     </Box>
        //   ),
        // }),
        // columnHelper.accessor("id", {
        //   header: "Actions",
        //   cell: ({ row }) => (
        //     <Box sx={{ display: "flex", gap: ".5rem" }}>
        //       <IconButton
        //         onClick={(e) => {
        //           e.stopPropagation();
        //           // navigate(`/clients/edit-client/${row.original.id}`);
        //         }}
        //         className="chip-warning-light"
        //         sx={{ fontSize: "14px" }}
        //       >
        //         <MdEdit sx={{ fontSize: "16px" }} />
        //       </IconButton>
        //       <IconButton
        //         // onClick={(e) => handleClientDelete(e, row.original.id)}
        //         className="chip-warning-light"
        //         sx={{ fontSize: "14px", mr: 0.5 }}
        //       >
        //         <MdDelete sx={{ fontSize: "16px" }} />
        //       </IconButton>
        //     </Box>
        //   ),
        // }),
    ];

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setSellLoading(true)

        let res = await SellProductAPI(formData)
        if (res.error != null) {
            toast.error(res?.error);
        } else {
            toast.success(res.data?.message)
            setFormData({
                product: "",
                quantity: "",
                price: "",
                note: "",
                user: ID
            })
            gettingData()
        }
        setSellLoading(false)
    }

    const gettingData = async () => {
        setLoading(true)
        let res = await GetSpecifucUserAPI("buyer", ID)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            setUserData(res.data?.result)
            // setAllSellProducts(res.data?.ProductData)
            let ProductData = res.data?.ProductData
            let AllProducts = ProductData?.map(data => {
                let CurrentUserpurchase = data?.sells?.filter(data => data?.UserData == res.data?.result?._id)
                let Quantity = 0;
                let Price = 0;
                let Process = CurrentUserpurchase.map(val => { Quantity += val?.quantity; Price += (val?.price * val?.quantity); })
                return ({
                    ...data,
                    Quantity: Quantity,
                    Price
                })
            })
            setAllSellProducts(AllProducts)
        }
        setLoading(false)
    }
    const gettingProducts = async () => {
        setLoading(true)
        let res = await GetProductsAPI()
        if (res.error != null) {
            toast.error(res?.error)
        } else {
            setAllProducts(res.data?.result || [])
        }
        setLoading(false)
    }
    useEffect(() => {
        if (ID) {
            gettingData();
            gettingProducts();
        }
    }, [])

    return (
        <>
            <PageWrapper loading={loading}>
                <Box sx={{ padding: "2rem 1rem", backgroundColor: "secondary.field", borderRadius: ".5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Avatar sx={{ height: 50, width: 50 }} alt={userData?.firstName} src={GenrateImage(userData?.profileImage)} />
                        <Box>
                            <Typography> {userData?.firstName} {userData?.lastName} </Typography>
                            <Typography sx={{ fontSize: ".9rem", color: "secondary.text" }}> {userData?.email}  </Typography>
                            <Typography sx={{ fontSize: ".9rem", color: "secondary.text" }}> {userData?.address}  </Typography>
                        </Box>
                    </Box>
                    <LoadingButton label={<> Edit </>} sx={{ width: "60px" }} onClick={() => Navigate("/dashboard/customers/edit", { state: { UserData: userData } })} />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography customeType="heading"> Products Sells </Typography>
                    {/* <Button variant='contained' onClick={() => Navigate("add")}> Buy Product </Button> */}
                    <CustomModal name="Buy Product">
                        <Typography customeType="heading" textAlign={"center"}> Sell Product </Typography>
                        <Grid container spacing={2} component="form" onSubmit={handleSubmit} sx={{ maxWidth: { md: "90%" }, mx: "auto" }}>
                            <Grid item xs={12} sm={12}>
                                <SelectField name={"product"} label="Select Product" value={formData.product} onChange={enteringData} options={allproducts} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputField name={"price"} label={"Price"} value={formData.price} onChange={enteringData} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputField name={"quantity"} label={"Quantity"} value={formData.quantity} onChange={enteringData} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputField name={"note"} label={"Note"} value={formData.note} onChange={enteringData} />
                            </Grid>
                            <Grid item xs={12} sm={12} sx={{ display: "fex", justifyContent: "center" }} >
                                <LoadingButton label={"Save"} loading={sellLoading} type="submit" />
                            </Grid>
                        </Grid>
                    </CustomModal>
                </Box>
                <Table
                    isSerial={true}
                    data={allSellproducts}
                    columns={columns}
                    isPaginate
                    loading={loading}
                    // pagination={pagination}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </PageWrapper>
        </>
    )
}

export default AddSellerForm
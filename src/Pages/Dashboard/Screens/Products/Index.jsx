import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// MUI :
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';

// ICONS :
import { MdEdit, MdDelete } from "react-icons/md";

// Compunents :
import PageWrapper from 'Components/PageWrapper'
import Table from 'Components/Table'
import Modal from 'Components/Modal';

// Helpers :
import { createColumnHelper } from "@tanstack/react-table";
import AddSellerForm from './AddProductForm';
import { GetProductsAPI } from 'API/Product';
import { toast } from 'react-toastify';





const Index = () => {

  const columnHelper = createColumnHelper();
  const Navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedPage, setSelectedPage] = useState(1)

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
    columnHelper.accessor("purchases", {
      header: "Total Purchases",
      cell: (info) => (
        <Box sx={{ display: "flex" }}>
          {/* <Box
                sx={{ height: "30px", borderRadius: "5px", mr: 1 }}
                component="img"
                src={getImage(info.row.original.company_logo, "sm")}
                alt={info.row.original.address}
              /> */}
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
              {info.row.original?.Purchases || 0}
            </Typography>
          </Box>
        </Box>
      ),
    }),
    columnHelper.accessor("sales", {
      header: "Total Sales",
      cell: (info) => (
        <Box sx={{ display: "flex" }}>
          {/* <Box
                sx={{ height: "30px", borderRadius: "5px", mr: 1 }}
                component="img"
                src={getImage(info.row.original.company_logo, "sm")}
                alt={info.row.original.address}
              /> */}
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
              {info.row.original?.Sells || 0}
            </Typography>
          </Box>
        </Box>
      ),
    }),
    columnHelper.accessor("quantity", {
      header: "Available Quantity",
      cell: (info) => (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            fontSize={"14px"}
            sx={{ fontWeight: "500", color: "secondary.text" }}
          >
            {info.row.original?.AvailableQuantity || 0}
          </Typography>
        </Box>
      ),
    }),
    columnHelper.accessor("id", {
      header: "Actions",
      cell: ({ row }) => (
        <Box sx={{ display: "flex", gap: ".5rem" }}>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              // navigate(`/clients/edit-client/${row.original.id}`);
            }}
            className="chip-warning-light"
            sx={{ fontSize: "14px" }}
          >
            <MdEdit sx={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton
            // onClick={(e) => handleClientDelete(e, row.original.id)}
            className="chip-warning-light"
            sx={{ fontSize: "14px", mr: 0.5 }}
          >
            <MdDelete sx={{ fontSize: "16px" }} />
          </IconButton>
        </Box>
      ),
    }),
  ];


  const gettingProducts = async () => {
    setLoading(true)
    let res = await GetProductsAPI()
    if (res.error != null) {
      toast.error(res?.error)
    } else {
      toast.success(res.data?.message)
      // setAllProducts(res.data?.result)
      let ProductData = res.data?.result || []
      let AllProducts = ProductData?.map(data => {
        let Purchases = 0;
        let TotalPurchases = 0;
        let Sells = 0;
        let TotalSells = 0;
        let AvailableQuantity = 0;
        let Process = data?.purchases.map(val => { Purchases += val?.quantity; TotalPurchases += (Number(val?.quantity) * Number(val?.price)); })
        let Process2 = data?.sells.map(val => { Sells += val?.quantity; TotalSells += (Number(val?.quantity) * Number(val?.price)); })
        AvailableQuantity = Purchases - Sells
        // Purchases = Purchases * data?.price
        // Sells = Sells * data?.price
        return ({
          ...data,
          Purchases : TotalPurchases,
          Sells : TotalSells,
          AvailableQuantity
        })
      })
      setAllProducts(AllProducts)
    }
    setLoading(false)
  }
  useEffect(() => {
    gettingProducts()
  }, [])

  return (
    <>
      <PageWrapper>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
          <Button variant='contained' onClick={() => Navigate("add")}> Add New Product </Button>
        </Box>
        <Table
          isSerial={true}
          data={allProducts}
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

export default Index
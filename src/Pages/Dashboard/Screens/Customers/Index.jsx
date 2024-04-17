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
import AddSellerForm from './AddBuyerForm';
import { GetUserAPI } from 'API/User';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';





const Index = () => {

  const columnHelper = createColumnHelper();
  const Navigate = useNavigate();

  const [allCustomers, setAllCustomers] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedPage, setSelectedPage] = useState(1)

  const columns = [
    columnHelper.accessor("firstName", {
      header: "Name",
      cell: (info) => (

        <Box sx={{ display: "flex", flexFlow: "column" }}>
          <Typography
            fontSize={"14px"}
            sx={{ fontWeight: "500", color: "secondary.text" }}
          >
            {info.row.original.firstName + " " + info.row.original.lastName}
          </Typography>
        </Box>
      ),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => (
        <Typography
          fontSize={"14px"}
          sx={{ fontWeight: "500", color: "secondary.text" }}
        >
          {info.row.original.email}
        </Typography>
      ),
    }),
    columnHelper.accessor("address", {
      header: "Adress",
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
              {info.row.original.address}
            </Typography>
          </Box>
        </Box>
      ),
    }),
    columnHelper.accessor("sales", {
      header: "Total Sales",
      cell: (info) => (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            fontSize={"14px"}
            sx={{ fontWeight: "500", color: "secondary.text" }}
          >
            {info.row.original?.sales || 0}
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
              Navigate(`view?i=${row.original?._id}`);
            }}
            className="chip-warning-light"
            sx={{ fontSize: "14px" }}
          >
            <FaEye sx={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              Navigate(`edit`, { state: { UserData: row.original } });
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


  const gettingSellers = async () => {
    setLoading(true)
    let res = await GetUserAPI("buyer")
    if (res.error != null) {
      toast.error(res?.error)
    } else {
      toast.success(res.data?.message)
      setAllCustomers(res.data?.result)
    }
    setLoading(false)
  }
  useEffect(() => {
    gettingSellers()
  }, [])

  return (
    <>
      <PageWrapper>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
          <Button variant='contained' onClick={() => Navigate("add")}> Add New Customer </Button>
          {/* <Modal name="Add New Seller"> <AddSellerForm />  </Modal> */}
        </Box>
        <Table
          isSerial={true}
          data={allCustomers}
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
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// MUI :
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';

// ICONS :
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";


// Compunents :
import PageWrapper from 'Components/PageWrapper'
import Table from 'Components/Table'
import Modal from 'Components/Modal';

// APIs :
import { CreateUserAPI, GetUserAPI } from 'API/User';
// Helpers :
import { createColumnHelper } from "@tanstack/react-table";
import { toast } from 'react-toastify';






const Index = () => {

  const columnHelper = createColumnHelper();
  const Navigate = useNavigate();

  const [allSellers, setAllSellers] = useState([])
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
    columnHelper.accessor("purchases", {
      header: "Total Purchases",
      cell: (info) => (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            fontSize={"14px"}
            sx={{ fontWeight: "500", color: "secondary.text" }}
          >
            {info.row.original?.purchases || 0}
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

  const gettingCustomers = async () => {
    setLoading(true)
    let res = await GetUserAPI("seller")
    if (res.error != null) {
      toast.error(res?.error)
    } else {
      toast.success(res.data?.message)
      setAllSellers(res.data?.result)
    }
    setLoading(false)
  }
  useEffect(() => {
    gettingCustomers()
  }, [])

  return (
    <>
      <PageWrapper>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
          <Button variant='contained' onClick={() => Navigate("add")}> Add New Seller </Button>
          {/* <Modal name="Add New Seller"> <AddSellerForm />  </Modal> */}
        </Box>
        <Table
          isSerial={true}
          data={allSellers}
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
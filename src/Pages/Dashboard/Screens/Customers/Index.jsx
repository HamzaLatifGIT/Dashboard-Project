import React, { useState } from 'react'
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





const Index = () => {

  const columnHelper = createColumnHelper();
  const Navigate = useNavigate();

  const [allClients, setAllClients] = useState([])
  const [clientsLoading, setClientsLoading] = useState(false)
  const [selectedPage, setSelectedPage] = useState(1)

  const columns = [
    columnHelper.accessor("first_name", {
      header: "Name",
      cell: (info) => (
        <Box sx={{ display: "flex", flexFlow: "column" }}>
          <Typography
            fontSize={"14px"}
            sx={{ fontWeight: "500", color: "primary.text" }}
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
          sx={{ fontWeight: "500", color: "primary.text" }}
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
              sx={{ fontWeight: "500", color: "primary.text" }}
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
              sx={{ fontWeight: "500", color: "primary.text" }}
            >
              {info.row.original.purchases}
            </Typography>
          </Box>
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

  return (
    <>
      <PageWrapper>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
          <Button variant='contained' onClick={() => Navigate("add")}> Add New Customer </Button>
          {/* <Modal name="Add New Seller"> <AddSellerForm />  </Modal> */}
        </Box>
        <Table
          isSerial={true}
          data={allClients}
          columns={columns}
          isPaginate
          loading={clientsLoading}
          // pagination={pagination}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </PageWrapper>
    </>
  )
}

export default Index
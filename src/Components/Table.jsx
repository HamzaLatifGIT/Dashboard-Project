import React, { useEffect } from "react";
import { Box, CircularProgress, MenuItem, Pagination, Select, Typography, } from "@mui/material";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import "./Style.css";
import useWindowResize from "Utils/WindowResize";
// import { useTranslation } from "react-i18next";



function GlobalTable({
    isSerial = false,
    isAction = false,
    view = "",
    edit = "",
    remove,
    viewAble = null,
    activeStatus = "",
    handleActionChange = undefined,
    data = [],
    columns: otherColumn,
    loading,
    withoutHeaders,
    selectedPage,
    setSelectedPage,
    pagination,
    isPaginate = false,
}) {
    const columnHelper = createColumnHelper();
    //   const { t } = useTranslation();
    let columns = [];

    const windowWidth = useWindowResize();


    // Serial Column
    const serialColumn = [
        columnHelper.accessor((row, rowIndex) => rowIndex + 1, {
            id: "serialNumber",
            header: "Sr #",
            cell: (info) => info.getValue(),
        }),
    ];

    // Action Column
    const actionColumn = [
        columnHelper.accessor("action", {
            header: "Actions",
            //   header: t("actions"),
            cell: (info) => {
                return (
                    <Select
                        size={"small"}
                        value={"null"}
                        onChange={(e) =>
                            handleActionChange(info.row.original.id, e.target.value)
                        }
                        sx={{
                            borderColor: "transparent",
                            ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            ".MuiSvgIcon-root ": {
                                fill: "#e73823 !important",
                            },
                        }}
                        className="chip-warning-light"
                    >
                        <MenuItem
                            disabled
                            sx={{ fontStyle: "italic", display: "none" }}
                            value={"null"}
                        >
                            Action
                            {/* {t("action")} */}
                        </MenuItem>
                        {view && (
                            <MenuItem
                                value={"view"}
                                sx={{
                                    color: "secondary.selectedNav",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                View
                                {/* {t("view")} */}
                            </MenuItem>
                        )}
                        {edit && (
                            <MenuItem
                                value={"edit"}
                                sx={{
                                    color: "secondary.selectedNav",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Edit
                                {/* {t("edit")} */}
                            </MenuItem>
                        )}
                        {remove && (
                            <MenuItem
                                value={"remove"}
                                sx={{
                                    color: "secondary.selectedNav",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Remove
                                {/* {t("remove")} */}
                            </MenuItem>
                        )}
                        {activeStatus && info.row.original.is_active == false && (
                            <MenuItem
                                value={"activate"}
                                sx={{
                                    color: "secondary.selectedNav",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Active
                                {/* {t("active")} */}
                            </MenuItem>
                        )}
                        {activeStatus && info.row.original.is_active == true && (
                            <MenuItem
                                value={"deactivate"}
                                sx={{
                                    color: "secondary.selectedNav",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                In-Active
                                {/* {t("in_active")} */}
                            </MenuItem>
                        )}
                    </Select>
                );
            },
        }),
    ];

    if (isSerial && isAction) {
        columns = [...serialColumn, ...otherColumn, ...actionColumn];
    } else if (isSerial && !isAction) {
        columns = [...serialColumn, ...otherColumn];
    } else if (!isSerial && isAction) {
        columns = [...otherColumn, ...actionColumn];
    } else {
        columns = [...otherColumn];
    }

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleChangePage = (e, newPage) => {
        setSelectedPage(newPage);
    };

    const handleRowClick = (id) => {
        if (viewAble) {
            viewAble(id);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "transparent",
                marginTop: "1rem",
                width: "100%",
                maxWidth: "100vw",
                overflowX: "auto",
            }}
        >
            <table
                style={{
                    width: "100%",
                    textAlign: "left",
                    backgroundColor: "transparent",
                }}
            >
                {!withoutHeaders && (
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} id="global-table-th">
                                        <Box
                                            component="span"
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                width: "max-content",
                                                px: 2,
                                            }}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </Box>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                )}

                {/* when table load the content */}
                {loading && (
                    <tbody>
                        <tr>
                            <td colSpan={columns.length}>
                                <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
                                    <CircularProgress size={22} sx={{ mr: 1 }} />
                                    <Typography
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "primary.text",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        Loading Data...
                                        {/* {t("loading_data")}... */}
                                    </Typography>
                                </Box>
                            </td>
                        </tr>
                    </tbody>
                )}

                {/* if table successfully get success response from server */}
                {!loading && (
                    <tbody>
                        {/* if table has no data */}
                        {!loading && table.getRowModel().rows.length < 1 && (
                            <tr>
                                <td colspan={table.getHeaderGroups()[0]?.headers?.length ?? 2}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            my: 10,
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "primary.text",
                                                lineHeight: "24px",
                                            }}
                                        >
                                            No Data Found
                                            {/* {t("no_data_found")} */}
                                        </Typography>
                                    </Box>
                                </td>
                            </tr>
                        )}

                        {/* if table has data */}
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <tr
                                    className={viewAble && "cursor-hover"}
                                    onClick={() => handleRowClick(row.original.id)}
                                    key={row.id}
                                    id={row.original.id}
                                >
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td key={cell.id} id="td-in-tbody">
                                                <Box
                                                    fontSize={"14px"}
                                                    sx={{
                                                        fontWeight: 500,
                                                        color: "primary.text",
                                                        px: 2,
                                                    }}
                                                >
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </Box>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                )}
            </table>

            {isPaginate && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 4,
                        flexFlow: {
                            xs: "column",
                            sm: "row",
                        },
                    }}
                >
                    <Box sx={{ fontSize: "14px", mt: 1.5, mb: { xs: 2, sm: 0 } }}>
                        <span id="showing">Showing: </span> {pagination?.showing ?? 0} of
                        {/* <span id="showing">{t("showing")}: </span> {pagination?.showing ?? 0} {t("of")} */}
                        &nbsp;
                        {pagination?.totalItems ?? 0}
                    </Box>
                    <Box my={1}>
                        <Pagination
                            shape="rounded"
                            defaultPage={1}
                            count={pagination?.totalPages ?? 0}
                            page={selectedPage}
                            size={windowWidth < 601 ? "small" : "medium"}
                            onChange={handleChangePage}
                            sx={{
                                "& .MuiPaginationItem-root": {
                                    color: "secondary.mute",
                                },
                                "& .MuiPaginationItem-page": {
                                    border: "1px solid #A7A7A7",
                                    "&:hover": {
                                        backgroundColor: "#f0f0f0",
                                    },
                                },
                                "&.MuiPagination-root .Mui-selected": {
                                    backgroundColor: "secondary.selectedNav",
                                    color: "#fff",
                                    border: "none",
                                    "&:hover": {
                                        backgroundColor: "secondary.selectedNav",
                                        color: "#fff",
                                        opacity: 0.9,
                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default React.memo(GlobalTable);
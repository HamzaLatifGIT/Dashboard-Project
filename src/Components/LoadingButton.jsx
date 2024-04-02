import React from 'react'

// MUI :
import { Button, CircularProgress } from '@mui/material'





const LoadingButton = ({ loading, label, ...props }) => {
    return (
        <>
            <Button disabled={loading} sx={{ backgroundColor: "primary.field", height: "40px", "&.Mui-disabled": { backgroundColor: "primary.gray", cursor: "no-drop" , pointerEvents:"auto" } }} variant="contained" fullWidth  {...props} >
                {
                    loading ? <CircularProgress size={19} sx={{ color: "primary.text" }} />
                        : label
                }
            </Button>
        </>
    )
}

export default LoadingButton
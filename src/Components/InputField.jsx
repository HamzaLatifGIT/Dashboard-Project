import React from 'react'

// MUI :
import { Box, FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, Typography, alpha, styled } from '@mui/material'





const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const InputField = ({ name, label, value, onChange, }) => {
    return (
        <>
            <Box>
                <FormControl variant="standard" fullWidth>
                    <InputLabel shrink htmlFor="custome-input" sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
                        {label ?? ""} :
                    </InputLabel>
                    <CustomInput id="custome-input" name={name} value={value} onChange={onChange} />
                </FormControl>
            </Box>
        </>
    )
}

export default InputField
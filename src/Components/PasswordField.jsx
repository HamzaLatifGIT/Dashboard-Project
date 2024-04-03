import {React,useState} from 'react'

// MUI :
import { Box, FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, Typography, alpha, styled } from '@mui/material'


// ICONS :
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    // '& .MuiInputBase-input': {
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
        '&:focus-within': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
        '& .MuiInputBase-input':{
           padding:'0px'
        }

    
}));

const PasswordField = ({ name, label, value, onChange, }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <>
            <Box>
                <FormControl variant="standard" fullWidth>
                    <InputLabel shrink htmlFor="custome-password" sx={{ fontSize: "1.2rem", fontWeight: 500 }} >
                        {label ?? ""} :
                    </InputLabel>
                    <CustomInput id="custome-password" type={showPassword ? 'text' : 'password'} name={name} value={value} onChange={onChange} endAdornment ={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="start"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }  />
                </FormControl>
            </Box>
        </>
    )
}

export default PasswordField
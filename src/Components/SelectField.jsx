import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';

const CustomSelectInput = styled(InputBase)(({ theme }) => ({
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
            boxShadow: `${(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const SelectField = ({ name, label, value, options, onChange }) => {

    return (
        <Box>
            <FormControl variant='standard' fullWidth>
                <InputLabel shrink={true} htmlFor={name ?? "customeselect-input"} sx={{ fontSize: "1.2rem", fontWeight: 500 }}> {label ?? ""}: </InputLabel>
                <Select
                    labelId={name ?? "customeselect-input"}
                    id={name ?? "customeselect-input"}
                    value={value}
                    onChange={onChange}
                    // notched={true}
                    name={name}
                    input={<CustomSelectInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        options && Array.isArray(options) && options.map((value, key) => <MenuItem value={value?._id}>{value?.title}</MenuItem>)
                    }
                </Select>
            </FormControl>

        </Box>
    );
}
export default SelectField
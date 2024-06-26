import React from 'react'

// MUI :
import { Backdrop, Box, Button, Fade, Modal } from '@mui/material'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const CustomModal = ({ name, type = "button", children }) => {
    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <>
            {
                type == "text" ?
                    <p onClick={toggleModal}>{name}</p>
                    :
                    <Button variant='contained' onClick={toggleModal}>{name}</Button>
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={toggleModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default CustomModal
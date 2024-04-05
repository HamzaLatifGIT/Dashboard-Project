import React, { useEffect, useRef, useState } from 'react'

// MUI :
import { Box, Typography } from '@mui/material'


// ASSETS :
import { IoMdAdd } from "react-icons/io";





const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const UploadField = ({ name, label, value, onChange, }) => {

    const FileRef = useRef(null);

    const [imageUrl, setImageUrl] = useState(null)

    const handelUpload = () => {
        FileRef.current.click()
    }
    const handelFileChange = (e) => {
        let { files } = e.target;
        getBase64(files[0], (url) => {
            setImageUrl(url);
        });
        onChange(files[0] || null)
    }

    useEffect(() => {
        if (value) {
            setImageUrl(value)
        } else {
            setImageUrl(null)
        }
    }, [])

    return (
        <>
            <Box onClick={handelUpload} sx={{ height: "150px", width: "150px", padding: "1px", backgroundColor: "secondary.shadow", borderRadius: ".5rem", overflow: "hiden", cursor: "pointer", display: "flex", gap: ".5rem", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px dashed black" }}>
                <input ref={FileRef} type='file' hidden id={name} name={name} onChange={handelFileChange} />
                {
                    imageUrl ?
                        <Box component={"img"} src={imageUrl} sx={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: ".5rem" }} />
                        :
                        <>
                            <IoMdAdd />
                            <Typography>Upload</Typography>
                        </>
                }
            </Box>
        </>
    )
}

export default UploadField
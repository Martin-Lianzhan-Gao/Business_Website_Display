import React from "react"
import { Button } from "@mui/material"

const MaterialButton = ({ text }) => {
    return (
        <Button variant="contained" color="primary">
            {text}
        </Button>
    );
}
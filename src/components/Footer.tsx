import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'grey.800',
                color: 'white',
                py: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                &copy; 2023 防災ポータル. All rights reserved.
            </Typography>
        </Box>
    )
}

export default Footer

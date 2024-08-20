import React from 'react'
import { Container, Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DisasterInfo from '../components/DisasterInfo'

const disasterEvents = [
    {
        title: '1件目の地震',
        date: '2023年5月15日 14:30',
        location: '東京湾',
        magnitude: 4.5,
        intensity: '4',
    },
    {
        title: '2件目の地震',
        date: '2023年5月14日 22:15',
        location: '茨城県沖',
        magnitude: 5.2,
        intensity: '5弱',
    },
]

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
                <DisasterInfo events={disasterEvents} />
            </Container>
            <Footer />
        </Box>
    )
}

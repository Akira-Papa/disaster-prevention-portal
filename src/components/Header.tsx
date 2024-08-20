import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

const Header = () => {
    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: 'white', boxShadow: 1 }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: 'text.primary' }}
                >
                    防災ポータル
                </Typography>
                <Box>
                    <Button color="primary" component={Link} href="/">
                        ホームページ
                    </Button>
                    <Button color="primary" component={Link} href="/goods">
                        防災グッズ一覧
                    </Button>
                    <Button color="primary" component={Link} href="/quiz">
                        防災クイズ
                    </Button>
                    <Button color="primary" component={Link} href="/tips">
                        防災tips
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header

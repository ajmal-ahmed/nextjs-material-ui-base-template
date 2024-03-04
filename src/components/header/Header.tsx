import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import NextLink from 'next/link'
import Link from '@mui/material/Link';


export default function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="absolute"
                    color="default"
                    elevation={0}
                    sx={{
                        position: 'relative'
                    }}>
                <Toolbar>
                    <Typography  variant="h6" component={NextLink} href={"/"}  sx={{flexGrow: 1}}>
                        Template
                    </Typography>
                    <Link href="/about-me" component={NextLink} variant="body2">
                        About
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
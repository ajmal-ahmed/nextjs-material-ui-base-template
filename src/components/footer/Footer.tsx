import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Footer() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '} {new Date().getFullYear()}.
        </Typography>
    );
}
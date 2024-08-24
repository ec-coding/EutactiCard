import React, { useState } from 'react';
import { Grid, Typography, styled } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';


const TypeEntry = ({ name, icon, logo, typeData }) => {

    const handleChange = () => {
        typeData(name)
    };

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '92px',
        maxHeight: '42px',
        borderRadius: '4px',
        objectFit: 'cover',
        objectPosition: 'center',
        background: 'none'
    });

    const Img2 = styled('img')({
        maxWidth: '25px',
        maxHeight: '25px',
    });

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
                width: {
                    xs: '220px',
                },
                marginTop: '-1px',
                marginX: '9.5px',
                paddingY: '2.5px',
                backgroundColor: 'inherit',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
            }}
        >
            <Grid item sm={9}
                sx={{ marginLeft: '0.5em' }}>
                <Typography
                    textAlign='left'
                    sx={{ fontSize: '14px' }}
                >
                    {name}
                </Typography>
            </Grid>
            <Grid item sm={2}
                marginRight="4px"
            >
                <Checkbox
                    onChange={handleChange}
                    inputProps={{ 'aria-label': `${name}` }}
                    color="primary" // Change the color to primary
                />
            </Grid>
        </Grid >
    )
}

export default TypeEntry

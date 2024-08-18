import React, { useState } from 'react';
import { Grid, Typography, styled } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';


const RarityEntry = ({ name, icon, rarityData }) => {

    const handleChange = () => {
        rarityData(name);
    }

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

    return (
        <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            lg={3}
            sx={{
                marginTop: '-1px',
                marginX: '7.5px',
                paddingY: '2.5px',
                backgroundColor: 'inherit',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
            }}
        >
            <Grid item sm={1.5}
                container
                alignItems="center"
            >
                <Img
                    sx={{
                        maxWidth: '25px',
                        maxHeight: '25px',
                    }}
                    src={icon} />
            </Grid>
            <Grid item sm={2}
                marginRight="12.5px"
            >
                <Checkbox
                    color="default"
                    onClick={handleChange}
                />
            </Grid>

            <Grid item sm={5}>
                <Typography
                    sx={{ fontSize: '14px' }}
                >
                    {name}
                </Typography>
            </Grid>

        </Grid>
    )
}

export default RarityEntry

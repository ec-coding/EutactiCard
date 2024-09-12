import React, { useState, useContext } from 'react';
import {
    Button,
    Container,
    Grid,
    Typography,
    TextField,
} from '@mui/material';
import Card from './Card/Card';

const CardResults = ({ searchResults }) => {

    return (
        <Grid container paddingY={2.5}>
            <Grid>
                <Grid justifyContent="start" paddingLeft={4.5}>
                    <Typography variant="h4" color="white" textAlign="left">
                        Search Results
                    </Typography>
                </Grid>
                <Grid container my={3.5} justifyContent="center">
                    {searchResults && searchResults.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </Grid>
            </Grid>

            {/* <Grid sx={{ background: 'linear-gradient(rgb(180, 145, 95), lightyellow, rgb(180, 145, 95))', border: '0.5em solid slateGrey' }}></Grid> */}
        </Grid>
    )
}

export default CardResults

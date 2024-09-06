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
            <Grid paddingX={4.5}>
                <Grid justifyContent="start">
                    <Typography variant="h5" color="white">
                        Search Results
                    </Typography>
                </Grid>
                <Grid>
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

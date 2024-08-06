import React, { useState, useContext } from 'react';
import {
    Button,
    Container,
    Grid,
    Typography,
    TextField,
} from '@mui/material';
import CardContext from '../contexts/CardContext';
import Card from './Card/Card';

const CardResults = () => {
    const [cards, changeCards] = useContext(CardContext)
    return (
        <Grid container paddingX={0}>
            <div>

                {cards && cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}

            </div>
        </Grid>
    )
}

export default CardResults

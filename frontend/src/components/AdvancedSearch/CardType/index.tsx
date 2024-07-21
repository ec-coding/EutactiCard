import React, { useState } from 'react';
import {
    Grid, Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TypeEntry from './TypeEntry';

const CardType = () => {
    return (
        <Accordion className="Mui-Accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Card Type</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    marginBottom: "1rem",
                }}
            >
                <Accordion
                    className="Mui-Accordion"
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        sx={{
                            backgroundColor: 'rgb(24, 24, 24)'
                        }}
                    >
                        <Typography color="white">Pokémon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container gap={1.25} paddingY={4}>
                            <TypeEntry name="Pokémon" logo="" icon="" uncheckedBg="" checkedBg="" />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className="Mui-Accordion"
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            backgroundColor: 'rgb(24, 24, 24)'
                        }}
                    >
                        <Typography color="white">Trainer</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container gap={1.25} paddingY={4}>
                            <TypeEntry name="Trainer" logo="" icon="" uncheckedBg="" checkedBg="" />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className="Mui-Accordion"
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            backgroundColor: 'rgb(24, 24, 24)'
                        }}
                    >
                        <Typography color="white">Energy</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container gap={1.25} paddingY={4}>
                            <TypeEntry name="Energy" logo="" icon="" uncheckedBg="" checkedBg="" />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    )
}

export default CardType

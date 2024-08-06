import React, { useState } from 'react';
import {
    Grid, Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchElement from '../SearchElement';

const CardType = () => {
    return (
        <Accordion className="Mui-Accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Resistance</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    marginBottom: "1rem",
                }}
            >
                <Grid container columnSpacing={1.5} rowSpacing={1} paddingX="7.5px">
                    <SearchElement
                        customProp="Grass"
                        uncheckedBg=''
                        checkedBg='' />
                    <SearchElement
                        customProp="Fire"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Water"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Lightning"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Fighting"
                        uncheckedBg=''
                        checkedBg=''
                    />

                    <SearchElement
                        customProp="Psychic"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Colorless"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Darkness"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Metal"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Fairy"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        customProp="Dragon"
                        uncheckedBg=''
                        checkedBg='' />
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default CardType

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
                        elementName="Grass"
                        uncheckedBg=''
                        checkedBg='' />
                    <SearchElement
                        elementName="Fire"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Water"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Lightning"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Fighting"
                        uncheckedBg=''
                        checkedBg=''
                    />

                    <SearchElement
                        elementName="Psychic"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Colorless"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Darkness"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Metal"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Fairy"
                        uncheckedBg=''
                        checkedBg='' />

                    <SearchElement
                        elementName="Dragon"
                        uncheckedBg=''
                        checkedBg='' />
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default CardType

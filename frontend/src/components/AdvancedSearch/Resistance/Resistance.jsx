import React, { useState } from 'react';
import {
    Grid, Typography,
} from '@mui/material';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchElement from '../../SearchElement';

const Resistance = () => {
    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Resistance
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItemPanel>
                            <Grid container gap={1} className="energy-type" paddingX={35}>
                                <SearchElement elementName="grass" />
                                <SearchElement elementName="fire" />
                                <SearchElement elementName="water" />
                                <SearchElement elementName="lightning" />
                                <SearchElement elementName="fighting" />
                                <SearchElement elementName="psychic" />
                                <SearchElement elementName="colorless" />
                                <SearchElement elementName="darkness" />
                                <SearchElement elementName="metal" />
                                <SearchElement elementName="fairy" />
                                <SearchElement elementName="dragon" />
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Resistance

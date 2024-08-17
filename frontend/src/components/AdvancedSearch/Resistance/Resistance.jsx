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
import SearchElement from '../../SearchElement/SearchElement';

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
                                <SearchElement elementName="grass" context="resistance" />
                                <SearchElement elementName="fire" context="resistance" />
                                <SearchElement elementName="water" context="resistance" />
                                <SearchElement elementName="lightning" context="resistance" />
                                <SearchElement elementName="fighting" context="resistance" />
                                <SearchElement elementName="psychic" context="resistance" />
                                <SearchElement elementName="colorless" context="resistance" />
                                <SearchElement elementName="darkness" context="resistance" />
                                <SearchElement elementName="metal" context="resistance" />
                                <SearchElement elementName="fairy" context="resistance" />
                                <SearchElement elementName="dragon" context="resistance" />
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Resistance

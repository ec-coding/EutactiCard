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

const Resistance = ({ resistanceData }) => {
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
                            <Grid container xs={7} gap={1} mx="auto" className="energy-type" paddingX={2.5}>
                                <SearchElement elementName="grass" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="fire" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="water" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="lightning" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="fighting" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="psychic" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="colorless" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="darkness" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="metal" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="fairy" context="resistance" resistanceData={resistanceData} />
                                <SearchElement elementName="dragon" context="resistance" resistanceData={resistanceData} />
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Resistance

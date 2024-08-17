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
import SearchElement from '../../SearchElement/SearchElement'

const Weakness = () => {
    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Weakness
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItemPanel>
                            <Grid container gap={1} className="energy-type" paddingX={35}>
                                <SearchElement elementName="grass" context="weakness" />
                                <SearchElement elementName="fire" context="weakness" />
                                <SearchElement elementName="water" context="weakness" />
                                <SearchElement elementName="lightning" context="weakness" />
                                <SearchElement elementName="fighting" context="weakness" />
                                <SearchElement elementName="psychic" context="weakness" />
                                <SearchElement elementName="colorless" context="weakness" />
                                <SearchElement elementName="darkness" context="weakness" />
                                <SearchElement elementName="metal" context="weakness" />
                                <SearchElement elementName="fairy" context="weakness" />
                                <SearchElement elementName="dragon" context="weakness" />
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Weakness

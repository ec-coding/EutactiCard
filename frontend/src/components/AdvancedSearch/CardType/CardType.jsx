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
import TypeEntry from './TypeEntry/TypeEntry';

const CardType = ({ typeData }) => {
    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Card Type
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Pokémon</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container gap={1.25} paddingY={4}>
                                    <TypeEntry name="Pokémon" logo="" icon="" typeData={typeData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Trainer</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container gap={1.25} paddingY={4}>
                                    <TypeEntry name="Trainer" logo="" icon="" typeData={typeData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Energy</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Grid container gap={1.25} paddingY={4}>
                                    <TypeEntry name="Energy" logo="" icon="" typeData={typeData} />
                                </Grid>
                            </AccordionItemPanel>
                        </AccordionItem>

                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default CardType

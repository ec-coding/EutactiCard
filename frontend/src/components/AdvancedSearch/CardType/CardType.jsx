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
                        <Grid container justifyContent="center" sx={{ background: "white" }} py={3}>
                            <Grid item xs={5} sx={{ background: "white" }} >
                                <Grid marginLeft={2.5} textAlign="left">
                                    <Typography variant="h6">Pokémon</Typography>
                                </Grid>
                                <Grid container paddingY={2.5} justifyContent="left">
                                    <TypeEntry name="Basic" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Baby" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Stage 1" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Stage 2" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="ex" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="EX" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Level-Up" logo="" icon="" typeData={typeData} />
                                    {/* <TypeEntry name="ex" logo="" icon="" typeData={typeData} /> */}
                                    <TypeEntry name="Tera" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="MEGA" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="BREAK" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="SP" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="LEGEND" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Restored" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="GX" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Single Strike" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Fusion Strike" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="TAG TEAM" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Prime" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Star" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Prism Star" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Rapid Strike" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Ultra Beast" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="V" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="VMAX" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="V-UNION" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="VSTAR" logo="" icon="" typeData={typeData} />
                                </Grid>
                            </Grid>
                            <Grid item xs={2.65} sx={{ background: "white" }}>
                                <Grid marginLeft={2.5} textAlign="left">
                                    <Typography variant="h6">Trainer</Typography>
                                </Grid>
                                <Grid container paddingY={2.5} justifyContent="left">
                                    <TypeEntry name="Item" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Pokémon Tool" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Stadium" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Supporter" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Technical Machine" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Team Plasma" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="ACE SPEC" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Rocket's Secret Machine" logo="" icon="" typeData={typeData} />
                                </Grid>
                            </Grid>
                            <Grid item xs={2.65} sx={{ background: "white" }}>
                                <Grid marginLeft={2.5} textAlign="left">
                                    <Typography variant="h6">Energy</Typography>
                                </Grid>
                                <Grid container paddingY={2.5} justifyContent="left">
                                    <TypeEntry name="Basic" logo="" icon="" typeData={typeData} />
                                    <TypeEntry name="Special" logo="" icon="" typeData={typeData} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default CardType

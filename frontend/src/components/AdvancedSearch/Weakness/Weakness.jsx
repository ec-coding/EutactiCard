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

const Weakness = ({ weaknessData }) => {

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
                            <Grid container xs={7} gap={1} mx="auto" className="energy-type" paddingX={2.5}>
                                <SearchElement elementName="grass" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="fire" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="water" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="lightning" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="fighting" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="psychic" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="colorless" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="darkness" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="metal" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="fairy" context="weakness" weaknessData={weaknessData} />
                                <SearchElement elementName="dragon" context="weakness" weaknessData={weaknessData} />
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Weakness

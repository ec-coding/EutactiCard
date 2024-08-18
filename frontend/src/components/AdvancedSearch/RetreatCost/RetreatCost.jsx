import React, { useState } from 'react';
import { Box, Grid, Typography, styled } from "@mui/material"
import Slider from '@mui/material/Slider';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RetreatCost = ({ retreatCostData }) => {
    const [value, setValue] = React.useState([0, 5]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        retreatCostData(value)
    };

    function valuetext(value) {
        return `${value}`;
    }

    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Retreat Cost
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel sx={{ marginBottom: "1rem" }}>
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItemPanel>
                            <Grid container justifyContent="center" alignContent="flex-start">
                                <Grid container justifyContent="center" sx={{ width: 730 }}>
                                    <Grid xs={6} item>
                                        <Typography variant="h6" textAlign="start">
                                            {value[0]}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Typography variant="h6" textAlign="end">
                                            {value[1]}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: 720 }}>
                                    <Slider
                                        getAriaLabel={() => 'Retreat Cost'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        min={0}
                                        max={5}
                                    />
                                </Box>
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default RetreatCost

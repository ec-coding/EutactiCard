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
                            <Grid marginY={2}>
                                <Typography variant="body1">Between</Typography>
                                <Typography variant="h6">{value[0]} - {value[1]}</Typography>
                            </Grid>
                            <Grid container justifyContent="center" alignContent="flex-start">
                                <Grid container sx={{ width: 720 }}>
                                    <Grid item xs={1.5}>
                                        <Typography variant="h6">0</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Slider
                                            getAriaLabel={() => 'Retreat Cost'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={0}
                                            max={5}
                                        />
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Typography variant="h6">5</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionItemPanel>
                    </Accordion>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default RetreatCost

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

const HitPoints = ({ hitPointData }) => {
    const [value, setValue] = React.useState([0, 340]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        hitPointData(value)
    };

    function valuetext(value) {
        return `${value}`;
    }

    return (
        <Accordion className="accordion-adv" allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        HP
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
                                        getAriaLabel={() => 'HP'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        step={10} // Restrict increments to 10
                                        min={0}
                                        max={340}
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

export default HitPoints

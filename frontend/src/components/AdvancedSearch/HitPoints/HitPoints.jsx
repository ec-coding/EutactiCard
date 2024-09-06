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
                                            getAriaLabel={() => 'HP'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            step={10} // Restrict increments to 10
                                            min={0}
                                            max={340}
                                        />
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Typography variant="h6">340</Typography>
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

export default HitPoints

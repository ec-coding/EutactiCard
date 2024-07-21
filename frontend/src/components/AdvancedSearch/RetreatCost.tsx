import React, { useState } from 'react';
import { Box, Grid, Typography, styled } from "@mui/material"
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function valuetext(value: number) {
    return `${value}`;
}


const index = () => {
    const [value, setValue] = React.useState<number[]>([0, 5]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Accordion className="Mui-Accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Retreat Cost</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    marginBottom: "1rem",
                }}
            >
                <Grid container justifyContent="center" alignContent="flex-start">
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
            </AccordionDetails>
        </Accordion>
    )
}

export default index

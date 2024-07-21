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
    const [value, setValue] = React.useState<number[]>([0, 340]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Accordion className="Mui-Accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>HP</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    marginBottom: "1rem",
                }}
            >
                <Grid container justifyContent="center" alignContent="flex-start">
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
            </AccordionDetails>
        </Accordion>
    )
}

export default index

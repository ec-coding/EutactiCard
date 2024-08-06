import React, { useState } from 'react';
import { Card, FormControlLabel, Grid, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

const SearchElement = ({ customProp, background, selected, onChange }) => {
    const [checked, setChecked] = useState(false);
    const [element, setElement] = useState('')

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const boxShadow = checked
        ? '1.5px 1.5px 0.5em black, inset -1.5px -1.5px 0 rgba(255, 255, 255, .75), inset 1.5px 1.5px 0 rgba(0, 0, 0, 0.75)'
        : '1.5px 1.5px 0.5em black, inset 1.5px 1.5px 0 rgba(255, 255, 255, 0.75), inset -1.5px -1.5px 0 rgba(0, 0, 0, 0.75)'

    return (
        <Grid item lg={3.75}
            onClick={handleChange}
            sx={{
                background: 'darkGrey',
                border: checked ? '2px solid orange' : '2px solid lightGrey',
                borderRadius: '5px',
            }}
        >
            <Card
                sx={{
                    boxShadow: boxShadow,
                    margin: '1px',
                    paddingY: '5px',
                    borderRadius: '5px',
                    backgroundImage: `${background}`, // Set the background image
                    backgroundSize: 'cover', // Optional: Ensure the image covers the entire container
                    backgroundRepeat: 'no-repeat', // Optional: Prevent the image from repeating
                    backgroundPosition: 'center', // Optional: Center the image within the container
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between" // Aligns items to the left and right
                >
                    <Grid item
                        marginLeft="8px"
                        marginRight="12px"

                        sx={{
                            borderRadius: '50%',
                            transform: checked ? 'translateY(1px) translateX(0.25px)' : 'translateY(0) translateX(0)',
                            transition: 'transform 0s ease',
                        }}
                    >
                        <div className={`icon-${customProp} m-0`}></div>

                    </Grid>
                    <Grid item sx={{ marginRight: 'auto' }}>
                        <Typography
                            sx={{
                                color: 'white',
                                textAlign: 'right',
                                textShadow: '1.5px 1.5px 2px black',
                                transform: checked ? 'translateY(1px) translateX(0.25px)' : 'translateY(0) translateX(0)',
                                transition: 'transform 0s ease',
                                fontSize: '14px'
                            }}
                            variant="body1"
                        >
                            {customProp.toUpperCase()}
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default SearchElement

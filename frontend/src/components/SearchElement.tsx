import React, { useState } from 'react';
import { Card, Grid, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

const SearchElement = ({ customProp, uncheckedBg, checkedBg }: { customProp: string, uncheckedBg: string, checkedBg: string }) => {
    const [checked, setChecked] = useState(false);
    const [background, setBackground] = useState(uncheckedBg);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        updateElementBg(event.target.checked);
    };

    const updateElementBg = (isChecked: boolean) => {
        console.log(isChecked)
        console.log(customProp)

        if (isChecked === false) {

            setBackground(uncheckedBg)
        } else {

            setBackground(checkedBg)
        }
    }



return (
    <Card
        sx={{
            border: '1px solid grey',
            borderRadius: '25px',
            boxShadow: '2px 2px 4px black',
            width: {
                xs: '220px',
            },
            backgroundImage: `url(${background})`, // Set the background image
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

                    borderRadius: '50%'
                }}
            >
                <div className={`icon-${customProp}`}></div>

            </Grid>
            <Grid item sx={{ marginRight: 'auto' }}>
                <Typography
                    sx={{
                        color: 'white',
                        textAlign: 'right',
                        textShadow: '1.5px 1.5px 0 black, -1.5px -1.5px 0 black, 1.5px -1.5px 0 black, -1.5px 1.5px 0 black'
                    }}
                    variant="h6"
                >
                    {customProp}
                </Typography>
            </Grid>
            <Grid item>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': `${customProp}` }}
                    color="primary" // Change the color to primary
                />
            </Grid>
        </Grid>
    </Card>
)
}

export default SearchElement

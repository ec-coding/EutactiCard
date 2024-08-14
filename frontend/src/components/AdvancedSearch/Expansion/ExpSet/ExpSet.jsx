import React, { useState } from 'react';
import { Card, Grid, Typography, styled } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';

const ExpSet = ({ name, icon, logo, uncheckedBg, checkedBg }) => {
    const [checked, setChecked] = useState(false);
    const [background, setBackground] = useState(uncheckedBg);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        updateElementBg(event.target.checked);
    };

    const updateElementBg = (isChecked) => {

        if (isChecked === false) {

            setBackground(uncheckedBg)
        } else {

            setBackground(checkedBg)
        }
    }

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '83px',
        maxHeight: '38px',
        borderRadius: '4px',
        objectFit: 'cover',
        objectPosition: 'center',
        background: 'none'
    });

    const Img2 = styled('img')({
        maxWidth: '25px',
        maxHeight: '25px',
    });

    return (
        <Grid item lg={3.75}
            sx={{
                marginTop: '-1px',
                marginX: '7.5px',
                paddingY: '2.5px',
                backgroundColor: 'inherit',
                borderTop: '1px solid black',
                borderBottom: '1px solid black'
            }}
        >
            <Grid container alignItems="center" >
                <Grid item container xs={1.25}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Img2 src={icon} />
                </Grid>
                <Grid item container xs={4} lg={3}
                    sx={{ borderRadius: '50%' }}
                >
                    <Img src={logo} />
                </Grid>
                <Grid item container xs={5} lg={6.25}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        sx={{ fontSize: '14px' }}
                    >
                        {name}
                    </Typography>
                </Grid>
                <Grid item container xs={1.35}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': `${name}` }}
                        color="primary" // Change the color to primary
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ExpSet

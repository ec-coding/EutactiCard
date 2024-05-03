import React, { useState } from 'react';
import { Card, Grid, Typography, styled } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';


const index = ({ name, icon, logo, uncheckedBg, checkedBg }: { name: string, icon: string, logo: string, uncheckedBg: string, checkedBg: string }) => {
    const [checked, setChecked] = useState(false);
    const [background, setBackground] = useState(uncheckedBg);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        updateElementBg(event.target.checked);
    };

    const updateElementBg = (isChecked: boolean) => {

        if (isChecked === false) {

            setBackground(uncheckedBg)
        } else {

            setBackground(checkedBg)
        }
    }

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '92px',
        maxHeight: '42px',
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
    <Card
    sx={{
        width: {
            xs: '290px',
        },
        paddingY: '5px',
        boxShadow: '2px 2px 4px black',
    }}
>
    <Grid
        container
        alignItems="center"
        justifyContent="space-between" // Aligns items to the left and right
    >
        <Grid item sm={4}
            marginLeft="2px"
            marginRight="4px"
            sx={{ borderRadius: '50%' }}
        >
            <Img src={logo} />
        </Grid>
        <Grid item sm={1}
            marginRight="4px"
        >
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': `${name}` }}
                color="primary" // Change the color to primary
            />
        </Grid>
        <Grid item sm={5}
            sx={{ marginRight: 'auto' }}>
            <Typography
            sx={{ fontSize: '14px' }}
            >
                {name}
            </Typography>
        </Grid>
        <Grid item sm={1}
            sx={{ marginRight: 'auto' }}>
            <Img2 src={icon} />
        </Grid>
    </Grid>
</Card>
  )
}

export default index

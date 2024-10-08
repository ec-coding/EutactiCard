import React, { useState } from 'react';
import {
    Container,
    Box,
    Grid,
    Typography,
    // Button,
    // Link,
    // CardMedia,
    // styled,
    Paper,
    useMediaQuery
} from '@mui/material';
import CardSearch from '../../components/CardSearch';
import LatestDecks from '../../components/LatestDecks';

const Home = () => {

    // const MobileWidthBreakpoint = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            <Container maxWidth={false} disableGutters>

                <Grid
                    alignContent={'center'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                        flexGrow: 1,
                        // background: 'linear-gradient(to bottom, gray 0%, rgb(58, 58, 58) 0.5%, rgb(58, 58, 58) 99.5%, gray 100%)',
                        backgroundColor: 'rgb(58, 58, 58)',
                        backgroundSize: 'cover', // Adjust as needed
                        paddingY: { xs: 4, sm: 4, md: 4, lg: 6 },
                        paddingX: { xs: 0, sm: 0, md: 4, lg: 4 }
                      }}
                    marginX={'auto'}
                >
                    <Grid sx={{ maxWidth: 1280 }} mx={'auto'}>
                        <CardSearch/>
                        <LatestDecks/>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default Home

import React, { useContext, useState } from 'react';
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
import CardSearch from '../../components/CardSearch/CardSearch';
import CardResults from '../../components/CardResults/CardResults';
import LatestDecks from '../../components/LatestDecks/LatestDecks';
import SplashScreen from '../../components/SplashScreen';
import './Home.scss'

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Grid
                    alignContent='center'
                    alignItems='center'
                    sx={{
                        flexGrow: 1,
                        backgroundImage: 'url(https://i.imgur.com/4rpUp7m.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        // paddingY: { xs: 4, sm: 4, md: 4, lg: 6 },
                        // paddingX: { xs: 0, sm: 0, md: 4, lg: 4 }
                    }}
                >
                    <Grid className={`pageFlipperContainer ${isFlipped ? 'flipped' : ''}`} sx={{ background: 'rgb(255, 255, 255, 0.10);' }}>
                        <Grid className="pageFlipper" sx={{ maxWidth: 1280 }} container mx='auto' alignItems="center" paddingTop={4.1}>
                            <Grid className="cardSearchContainer" container
                                sx={{ background: 'rgb(0, 0, 0, 0.5)' }}
                            >
                                <CardSearch setSearchResults={setSearchResults} />
                                {/* <CardResults searchResults={searchResults}/> */}
                            </Grid>
                            <Grid className="cardResultsContainer" container
                                sx={{ background: 'rgb(0, 0, 0, 0.5)' }}
                            >
                                <CardResults searchResults={searchResults} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home

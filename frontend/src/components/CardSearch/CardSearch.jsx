import {
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Radio,
    Typography,
    TextField,
} from '@mui/material';
import SearchElement from '../SearchElement';
import AdvSearch from '../AdvancedSearch/AdvancedSearch';
import { useContext, useState } from 'react';
import CardContext from '../../contexts/CardContext';
import './CardSearch.scss'

const CardSearch = ({ }) => {
    const [cards, setCards] = useState([]);
    const [cardElement, changeCardElement] = useState('')
    let selectedElements = [];

    // const itemsPerPage = 4
    const toggleElement = (element) => {
        if (selectedElements.includes(element)) {
            // Remove element from the context if unchecked
            selectedElements = selectedElements.filter(el => el !== element);
        } else {
            // Add element to the context only if it doesn't already exist
            selectedElements.push(element);
        }
    };

    const submitClick = () => {
        console.log(selectedElements);
        // fetch("https://api.pokemontcg.io/v2/cards/?q=set.id:base1")
        //     .then(res => res.json()) //parse response as json
        //     .then(response => {
        //         const imageUrl = response.data.map((card) => card.images.small); // Explicitly set the type for imageUrls
        //         const limitedCards = imageUrls.slice(0, 5);
        //         setCards(limitedCards);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching data:", error);
        //     });
    }

    const handleDataFromChild = (newState) => {
        setGrassChecked(newState);
        console.log(setGrassChecked)
    };


    const filterHeader = {
        fontSize: '1.35rem',
        textShadow: '1.5px 1.5px 0 black',
    }

    const filterTextBar = {
        backgroundColor: 'white',
        borderRadius: '2.5px',
        border: '1px solid darkGrey',
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            padding: '6px' // Override the padding
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
        },
        boxShadow: 'inset -1.5px -1.5px 0 rgba(255, 255, 255, .75), inset 1.5px 1.5px 0 rgba(0, 0, 0, 0.75)'
    }

    const TextBarOutline = {
        // background: 'darkGrey',
        // border: '5px solid lightGrey',
        borderRadius: '5px'
    }

    return (
        <Grid container paddingX={0}>
            <Grid marginBottom={2} textAlign="left">
                <Typography variant="h4" color="white"
                    sx={{
                        textShadow: '2px 2px 0 black',
                    }}
                >
                    Search for Cards
                </Typography>
            </Grid>
            <Grid container>
                <Grid item container lg={6}>
                    <Grid item container lg={12} mx="auto" alignItems="flex-end" justifyContent="space-between">
                        <Grid item container gap={4}>
                            <Grid item lg={5.5}>
                                <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                    sx={filterHeader}
                                >
                                    Search by Name
                                </Typography>
                                <Grid
                                    sx={TextBarOutline}
                                >
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        name="cardName"
                                        sx={filterTextBar}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item lg={5.5}>
                                <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                                    sx={filterHeader}
                                >
                                    Search by Card Text
                                </Typography>
                                <Grid
                                    sx={TextBarOutline}
                                >
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        name="cardText"
                                        sx={filterTextBar}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* SEARCH PARAMS - ENERGY TYPE */}
                    <Grid container marginTop={4} gap={0.5}>
                        <Grid item>
                            <Typography variant="h5" marginBottom="0.5vh" color="white"
                                sx={filterHeader}
                            >
                                Energy Type
                            </Typography>
                        </Grid>
                        <Grid container gap={1} className="energy-type">
                            <SearchElement elementName="grass" toggleElement={toggleElement} />
                            <SearchElement elementName="fire" toggleElement={toggleElement} />
                            <SearchElement elementName="water" toggleElement={toggleElement} />
                            <SearchElement elementName="lightning" toggleElement={toggleElement} />
                            <SearchElement elementName="fighting" toggleElement={toggleElement} />
                            <SearchElement elementName="psychic" toggleElement={toggleElement} />
                            <SearchElement elementName="colorless" toggleElement={toggleElement} />
                            <SearchElement elementName="darkness" toggleElement={toggleElement} />
                            <SearchElement elementName="metal" toggleElement={toggleElement} />
                            <SearchElement elementName="fairy" toggleElement={toggleElement} />
                            <SearchElement elementName="dragon" toggleElement={toggleElement} />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item lg={4} gap={2} justifyContent="start">
                    <Grid item lg={7} marginX="auto">
                        <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                            sx={filterHeader}
                        >
                            Evolves From
                        </Typography>
                        <Grid
                            sx={TextBarOutline}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="evolvesFrom"
                                sx={filterTextBar}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid item lg={7} marginX="auto">
                        <Typography variant="h5" marginY="0.5vh" color="white" textAlign="left"
                            sx={filterHeader}
                        >
                            Evolves To
                        </Typography>
                        <Grid
                            sx={TextBarOutline}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="evolvesTo"
                                sx={filterTextBar}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container lg={12} gap={2} marginTop={12} justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'none',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                borderRadius: '10px',
                                paddingX: 4,
                                bgcolor: 'rgb(25, 118, 210)',
                                boxShadow: '2px 4px 6px black',
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'none',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                borderRadius: '10px',
                                paddingX: 4,
                                bgcolor: '#f3ce49',
                                boxShadow: '2px 4px 6px black',
                            }}
                            type="submit"
                            onClick={submitClick}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item lg={12} my={5} mx="auto">
                <Grid item sm={12}>
                    <AdvSearch />
                </Grid>
            </Grid>

            <Grid>
                {/* Display the fetched card images */}
                {cards.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Card ${index}`} />
                ))}
            </Grid>

        </Grid>
    )
}

export default CardSearch

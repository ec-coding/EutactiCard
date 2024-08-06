import {
    Box,
    Button,
    Card,
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
    const [selectedElement, setSelectedElement] = useState(null);
    // const itemsPerPage = 4
    const handleElementChange = (element) => {
        setSelectedElement(element);
    };

    const submitClick = () => {
        fetch("https://api.pokemontcg.io/v2/cards/?q=set.id:base1")
            .then(res => res.json()) //parse response as json
            .then(response => {
                const imageUrl = response.data.map((card) => card.images.small); // Explicitly set the type for imageUrls
                const limitedCards = imageUrls.slice(0, 5);
                setCards(limitedCards);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

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
                    <Grid container marginTop={4} gap={0.5}>
                        <Grid item>
                            <Typography variant="h5" marginBottom="0.5vh" color="white"
                                sx={filterHeader}
                            >
                                Energy Type
                            </Typography>
                        </Grid>
                        <Grid container gap={1} className="energy-type">
                            <Grid lg={3.75} className="energy-type-entry">
                                <Card className="energy-type-bg"
                                    sx={{
                                        backgroundImage: 'linear-gradient(264deg, #F4D03F 0%, #77CC55 15%, #055a3b 100%)'
                                    }}
                                >
                                    <Grid container className="energy-type-container">
                                        <Grid item className="icon-container">
                                            <div className={`icon-Grass m-0`}></div>
                                        </Grid>
                                        <Grid item sx={{ marginRight: 'auto' }} className="label-container">
                                            <Typography variant="body1">Grass</Typography>
                                        </Grid>
                                        <input class="type-input element-input" type="radio" id="type-grass" name="energy-type" checked={cardElement.includes('grass')} onChange={() => changeCardElement('grass')} />
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid lg={3.75} className="energy-type-entry">
                                <Card className="energy-type-bg"
                                    sx={{
                                        backgroundImage: 'linear-gradient(270deg, rgb(255, 247, 93) 0%, rgb(254, 101, 13) 55%, rgb(243, 60, 4) 70%, rgb(218, 31, 5) 85%, rgb(161, 1, 0) 100%)'
                                    }}
                                >
                                    <Grid container className="energy-type-container">
                                        <Grid item className="icon-container">
                                            <div className={`icon-Fire m-0`}></div>
                                        </Grid>
                                        <Grid item sx={{ marginRight: 'auto' }} className="label-container">
                                            <Typography variant="body1">Fire</Typography>
                                        </Grid>
                                        <input class="type-input element-input" type="radio" id="type-fire" name="energy-type" checked={cardElement.includes('fire')} onChange={() => changeCardElement('fire')} />
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid lg={3.75} className="energy-type-entry">
                                <Card className="energy-type-bg"
                                    sx={{
                                        backgroundImage: 'linear-gradient(250deg, #1366c5 0%, #2BC0E4 61%, #2a238d 100%)'
                                    }}
                                >
                                    <Grid container className="energy-type-container">
                                        <Grid item className="icon-container">
                                            <div className={`icon-Water m-0`}></div>
                                        </Grid>
                                        <Grid item sx={{ marginRight: 'auto' }} className="label-container">
                                            <Typography variant="body1">Water</Typography>
                                        </Grid>
                                        <input class="type-input element-input" type="radio" id="type-water" name="energy-type" checked={cardElement.includes('water')} onChange={() => changeCardElement('water')} />
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid lg={3.75} className="energy-type-entry">
                                <Card className="energy-type-bg"
                                    sx={{ 
                                        backgroundImage: 'linear-gradient(250deg, #1366c5 0%, #2BC0E4 61%, #2a238d 100%)' 
                                    }}
                                >
                                    <Grid container className="energy-type-container">
                                        <Grid item className="icon-container">
                                            <div className={`icon-Lightning m-0`}></div>
                                        </Grid>
                                        <Grid item sx={{ marginRight: 'auto' }} className="label-container">
                                            <Typography variant="body1">Lightning</Typography>
                                        </Grid>
                                        <input class="type-input element-input" type="radio" id="type-lightning" name="energy-type" checked={cardElement.includes('lightning')} onChange={() => changeCardElement('lightning')} />
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container gap={1}>
                            <SearchElement
                                customProp="Grass"
                                background='linear-gradient(264deg, #F4D03F 0%, #77CC55 15%, #055a3b 100%)'
                            />
                            <SearchElement
                                customProp="Fire"
                                background='linear-gradient(270deg, rgb(255, 247, 93) 0%, rgb(254, 101, 13) 55%, rgb(243, 60, 4) 70%, rgb(218, 31, 5) 85%, rgb(161, 1, 0) 100%)'
                            />
                            <SearchElement
                                customProp="Water"
                                background='linear-gradient(250deg, #1366c5 0%, #2BC0E4 61%, #2a238d 100%)'
                            />
                            <SearchElement
                                customProp="Lightning"
                                background='linear-gradient(65deg, #db9a22 0%, #d5e25a 40%, #FAB536 100%)'
                            />
                            <SearchElement
                                customProp="Fighting"
                                background='linear-gradient(to left, rgb(182, 156, 103), rgb(153, 102, 0) 55%, rgb(112, 26, 0) 100%)'
                            />
                            <SearchElement
                                customProp="Psychic"
                                background='linear-gradient(to left, rgb(230, 140, 204) 0%, #a18cd1 25%, #1f1044 100%)'
                            />
                            <SearchElement
                                customProp="Colorless"
                                background='linear-gradient(to right, #AAAA99, #e4e4e4)'
                            />
                            <SearchElement
                                customProp="Darkness"
                                background='linear-gradient(to left, #3b3941 0%, #141414 100%)'
                            />
                            <SearchElement
                                customProp="Metal"
                                background='linear-gradient(65deg, #a6b6d4, #61534d, #e2d3d3, #61534d, #a6b6d4)'
                            />
                            <SearchElement
                                customProp="Fairy"
                                background='linear-gradient(to right, #e66465, #9198e5)'
                            />
                            <SearchElement
                                customProp="Dragon"
                                background='linear-gradient(to right, #BF953F 5%, #FCF6BA 15%, #B38728 35%, #FBF5B7 75%, #AA771C 100%)'
                            />
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

            {/* <Grid item lg={12} mx="auto">
                <Grid item>
                    <Typography variant="h5" marginY="1vh" color="white"
                            sx={filterHeader}
                        >
                            Advanced Search
                        </Typography>
                </Grid>
                <Grid sm={12}>
                    <AdvSearch />
                </Grid>
            </Grid> */}

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
